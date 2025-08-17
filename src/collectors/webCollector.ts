import { Temporal} from '@js-temporal/polyfill';
import { AbstractCollector, Invoice, DownloadedInvoice, CompleteInvoice, CollectorType, CollectorCaptcha, CollectorState } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { AuthenticationError, CollectorError, LoggableError, MaintenanceError, UnfinishedCollectorError, NoInvoiceFoundError } from '../error';
import { ProxyFactory } from '../proxy/proxyFactory';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/credential";
import * as utils from '../utils';


export type WebConfig = {
    id: string,
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    state?: CollectorState,
    entryUrl: string,
    useProxy?: boolean,
    captcha?: CollectorCaptcha,
    loadImages?: boolean,
    autoLogin?: {
        cookieNames?: string[],
        localStorageKeys?: string[]
    }
}

export abstract class WebCollector extends AbstractCollector {
    static DEFAULT_TIMEZONE = 'Europe/Paris';

    driver: Driver | null;

    constructor(config: WebConfig) {
        super({
            ...config,
            type: CollectorType.WEB,
            useProxy: config.useProxy === undefined ? true : config.useProxy,
            state: config.state || CollectorState.ACTIVE,
            loadImages: config.loadImages === undefined ? config.captcha == CollectorCaptcha.CLOUDFLARE : config.loadImages,
            autoLogin: config.autoLogin || {
                cookieNames: [],                // Take all cookies by default
                localStorageKeys: undefined     // Take no localStorage by default
            }
        });
        this.driver = null;
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        // Get proxy
        const proxy = this.config.useProxy ? await ProxyFactory.getProxy().get(location) : null;

        // Start browser and page
        this.driver = new Driver(this);
        await this.driver.open(proxy);

        // Set cookies
        await this.driver.setCookies(secret.cookies);

        // Set localStorage
        await this.driver.setLocalStorage(secret.localStorage);

        try {
            // Open entry url
            await this.driver.goto(this.config.entryUrl);
            
            // Check if website is in maintenance
            const is_in_maintenance = await this.is_in_maintenance(this.driver)
            if (is_in_maintenance) {
                throw new MaintenanceError(this);
            }

            // Check if user is logged in
            const is_logged_in = await this.is_logged_in(this.driver)

            // If user is not logged in, try to login
            if (!is_logged_in) {
                // Set progress step to logging in
                state.update(State._2_LOGGING_IN);

                console.log("User is not logged in, logging in...")
                const login_error = await this.login(this.driver, secret.params)

                // Check if not authenticated
                if (login_error) {
                    throw new AuthenticationError(login_error, this);
                }

                // Check if 2fa is required
                const is_2fa = await this.isTwofa(this.driver)

                // If 2fa is required, 
                if (is_2fa) {
                    // Set progress step to 2fa waiting
                    state.update(State._3_2FA_WAITING, is_2fa);

                    // Set instructions for UI
                    await twofa_promise.setInstructions(is_2fa);

                    console.log("2FA is required, performing 2FA...")
                    const twofa_error = await this.twofa(this.driver, secret.params, twofa_promise)

                    // Check if 2fa error
                    if (twofa_error) {
                        throw new AuthenticationError(twofa_error, this);
                    }
                }

                console.log("User is successfully logged in")
            }
            else {
                console.log("User is successfully logged in using cookies and localStorage")
            }

            // Update secret.cookies
            secret.cookies = await this.driver.getCookies(this.config.autoLogin.cookieNames);

            // Update secret.localStorage
            secret.localStorage = await this.driver.getLocalStorage(this.config.autoLogin.localStorageKeys);

            // Set progress step to collecting
            state.update(State._5_COLLECTING);

            // Collect invoices
            const invoices = await this.collect(this.driver, secret.params)
            
            // If invoices is undefined, collector is unfinished
            if (invoices === undefined) {
                throw new UnfinishedCollectorError(this);
            }

            // If invoices is empty, collector may be broken
            if (invoices.length === 0) {
                throw new NoInvoiceFoundError(this);
            }

            return invoices.map(newInvoice => ({
                id: newInvoice.id.trim(),
                datetime: newInvoice.datetime || Temporal.Instant.fromEpochMilliseconds(newInvoice.timestamp || 0).toString({timeZone: WebCollector.DEFAULT_TIMEZONE}),
                amount: newInvoice.amount?.trim(),
                link: newInvoice.link?.trim(),
                metadata: newInvoice.metadata || {},
                downloadData: newInvoice.downloadData || {}
            }));
        } catch (error) {
            // Get url, source code and screenshot
            const url = this.driver.url();
            const source_code = await this.driver.sourceCode();
            const screenshot = await this.driver.screenshot();

            if (error instanceof LoggableError) {
                error.url = url;
                error.source_code = source_code;
                error.screenshot = screenshot;
            }
            if (error instanceof CollectorError) {
                throw error;
            }

            // For unexpected error happening during the collection, log the error
            let loggableError = new LoggableError(
                "An error occured while collecting invoice from web",
                this,
                { cause: error }
            );
            loggableError.url = url;
            loggableError.source_code = source_code;
            loggableError.screenshot = screenshot;
            throw loggableError;
        }
    }

    async _download(invoice: Invoice): Promise<CompleteInvoice> {
        if (!this.driver) {
            throw new Error('Driver is not initialized.');
        }

        try {
            let downloadedInvoice = await this.download(this.driver, invoice);

            // If downloadedInvoice is undefined, collector is unfinished
            if (!downloadedInvoice) {
                throw new UnfinishedCollectorError(this);
            }

            // If documents field is empty
            if (downloadedInvoice.documents.length === 0) {
                throw new LoggableError(`No documents downloaded`, this);
            }

            let data;
            // If one document downloaded
            if (downloadedInvoice.documents.length === 1) {
                data = downloadedInvoice.documents[0];
            }
            else {
                data = await utils.mergePdfDocuments(downloadedInvoice.documents);
            }

            return {
                ...downloadedInvoice,
                datetime: downloadedInvoice.datetime || "",
                data,
                mimetype: mimetypeFromBase64(data),
                collected_timestamp: Date.now(),
                metadata: downloadedInvoice.metadata || {}
            };
        } catch (error) {
            // Get url, source code and screenshot
            const url = this.driver.url();
            const source_code = await this.driver.sourceCode();
            const screenshot = await this.driver.screenshot();

            if (error instanceof LoggableError) {
                error.url = url;
                error.source_code = source_code;
                error.screenshot = screenshot;
            }
            if (error instanceof CollectorError) {
                throw error;
            }

            // For unexpected error happening during the download, log the error
            let loggableError = new LoggableError(
                "An error occured while downloading invoice from web",
                this,
                { cause: error }
            );
            loggableError.url = url;
            loggableError.source_code = source_code;
            loggableError.screenshot = screenshot;
            throw loggableError;
        }
    }

    async close() {
        if (this.driver != null) {
            // Close the browser
            await this.driver.close();
        }
    }

    //NOT IMPLEMENTED

    async is_in_maintenance(driver: Driver): Promise<boolean>{
        //Assume the website is not in maintenance
        return false;
    }

    async is_logged_in(driver: Driver): Promise<boolean>{
        // If user is logged in, the URL should be equal to the entry URL
        return driver.url() === this.config.entryUrl;
    }

    abstract login(driver: Driver, params: any): Promise<string | void>;

    async isTwofa(driver: Driver): Promise<string | void>{
        //Assume the collector does not implement 2FA
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        //Assume the collector does not implement 2FA
    }

    abstract collect(driver: Driver, params: any): Promise<Invoice[] | void>;

    abstract download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice | void>;

    // DOWNLOAD METHODS

    async download_link(driver: Driver, link: string): Promise<string> {
        return await driver.downloadFile(link);
    }

    async download_webpage(driver: Driver, link: string): Promise<string> {
        // Get current value
        const loadImagesPreviousValue = driver.collector.config.loadImages;
        // Allow loading images so that the invoice is fully rendered
        driver.collector.config.loadImages = true;
        // Go to webpage
        await driver.goto(link);
        // Download as PDF
        const data = await driver.pdf();
        // Restore previous value
        driver.collector.config.loadImages = loadImagesPreviousValue;
        return data;
    }

    async download_from_file(driver: Driver): Promise<string> {
        return await driver.waitForFileToDownload(false);
    }
}
