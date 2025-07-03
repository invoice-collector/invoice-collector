import { AbstractCollector, Invoice, DownloadedInvoice, CompleteInvoice, CollectorType, CollectorCaptcha, CollectorState } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { AuthenticationError, CollectorError, LoggableError, MaintenanceError, UnfinishedCollectorError, NoInvoiceFoundError } from '../error';
import { ProxyFactory } from '../proxy/proxyFactory';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/credential";



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
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    state?: CollectorState,
    entryUrl: string,
    useProxy?: boolean,
    captcha?: CollectorCaptcha
}

export abstract class WebCollector extends AbstractCollector {

    driver: Driver | null;

    constructor(config: WebConfig) {
        super({
            ...config,
            type: CollectorType.WEB,
            useProxy: config.useProxy === undefined ? true : config.useProxy,
            state: config.state || CollectorState.ACTIVE
        });
        this.driver = null;
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        // Get proxy
        const proxy = this.config.useProxy ? await ProxyFactory.getProxy().get(location) : null;

        // Start browser and page
        this.driver = new Driver(this);
        await this.driver.open(proxy);

        // Set cookies if any
        if (secret.cookies) {
            await this.driver.browser?.setCookie(...secret.cookies);
        }

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
                console.log("User is successfully logged in using cookies")
            }

            // Update cookies
            secret.cookies = await this.driver.browser?.cookies();

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
                timestamp: newInvoice.timestamp,
                amount: newInvoice.amount?.trim(),
                link: newInvoice.link?.trim()
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

            // If data field is missing, collector is broken
            if (downloadedInvoice.data == null || downloadedInvoice.data.length === 0) {
                throw new LoggableError(`Downloaded invoice data is empty`, this);
            }

            return {
                ...downloadedInvoice,
                mimetype: mimetypeFromBase64(downloadedInvoice.data)
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

    async download_link(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        if (!invoice.link) {
            throw new Error('Field `link` is missing in the invoice object.');
        }
        return {
            ...invoice,
            data: await driver.downloadFile(invoice.link)
        }
    }

    async download_webpage(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        await driver.goto(invoice.link);
        return {
            ...invoice,
            data: await driver.pdf()
        }
    }

    async download_from_file(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            data: await driver.waitForFileToDownload(false)
        }
    }
}
