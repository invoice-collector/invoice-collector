import { Invoice, CompleteInvoice, CollectorType, CollectorCaptcha, CollectorState, Config } from "./abstractCollector";
import { Driver, Element } from '../driver/driver';
import { AuthenticationError, CollectorError, LoggableError, NoInvoiceFoundError } from '../error';
import { ProxyFactory } from '../proxy/proxyFactory';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/state";
import * as utils from '../utils';
import { V2Collector } from "./v2Collector";

export type WebConfig = Config & {
    loginUrl: string,
    entryUrl?: string,
    useProxy?: boolean,
    captcha?: CollectorCaptcha,
    loadImages?: boolean,
    autoLogin?: {
        cookieNames?: string[],
        localStorageKeys?: string[]
    }
}

export abstract class WebCollector extends V2Collector<WebConfig> {

    driver: Driver | null;

    constructor(config: WebConfig) {
        super({
            ...config,
            type: config.type || CollectorType.WEB,
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

    async _collect(
        state: State,
        twofa_promise: TwofaPromise,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]> {
        // Get proxy
        const proxy = this.config.useProxy ? await ProxyFactory.getProxy().get(location) : null;

        // Start browser and page
        const driver = new Driver(this);
        this.driver = driver;
        await driver.open(proxy);

        // Set cookies
        await driver.setCookies(secret.cookies);

        // Set localStorage
        await driver.setLocalStorage(secret.localStorage);

        try {
            // Pre actions
            await this.pre(driver);

            // Open entry url
            await driver.goto(this.config.entryUrl || this.config.loginUrl);

            // Check if user needs to login
            const needLogin = await this.needLogin(driver)

            // If user need to login
            if (needLogin) {
                // Set progress step to logging in
                state.update(State._2_LOGGING_IN);

                console.log("User is not logged in, logging in...")
                const login_error = await this.login(driver, secret.params)

                // Check if not authenticated
                if (login_error) {
                    throw new AuthenticationError(login_error, this);
                }
            }
            else {
                console.log("Successfully used cookies and local storage")
            }

            // Check if 2fa is required
            const needTwofa = await this.needTwofa(driver)

            // If 2fa is required
            if (needTwofa) {
                // Set progress step to 2fa waiting
                state.update(State._3_2FA_WAITING, needTwofa);

                // Set instructions for UI
                await twofa_promise.setInstructions(needTwofa);

                console.log(`2FA is required, performing 2FA... (${needTwofa})`)
                const twofa_error = await this.twofa(driver, secret.params, twofa_promise)

                // Check if 2fa error
                if (twofa_error) {
                    throw new AuthenticationError(twofa_error, this);
                }
            }

            console.log("User is successfully logged in")

            // Update secret.cookies
            secret.cookies = await driver.getCookies(this.config.autoLogin?.cookieNames);

            // Update secret.localStorage
            secret.localStorage = await driver.getLocalStorage(this.config.autoLogin?.localStorageKeys);

            // Set progress step to collecting
            state.update(State._5_COLLECTING);

            // Navigate to invoices
            await this.navigate(driver, secret.params)

            // Get previous invoice ids
            const previousInvoiceIds = previousInvoices.map((inv) => inv.id);

            // Find the most recent invoice timestamp from previousInvoices
            const mostRecentTimestamp = previousInvoices.length > 0 
                ? Math.max(...previousInvoices.map(inv => inv.timestamp))
                : 0;

            // For each page
            let invoices: CompleteInvoice[] = [];
            let firstDownload = true;
            await this.forEachPage(driver, secret.params, async () => {
                // Check if no invoices are present on the page
                const isEmpty = await this.isEmpty(driver);

                // Continue only if invoices are present
                if (isEmpty == false) {

                    // For each invoice on the page
                    const invoiceElements = await this.getInvoices(driver, secret.params);
                    
                    // If invoice elements is empty, collector may be broken
                    if (invoiceElements.length === 0) {
                        throw new NoInvoiceFoundError(this);
                    }

                    // For each invoice element
                    for (const element of invoiceElements) {
                        // Get invoice data
                    let invoice: Invoice | null = await this.data(driver, secret.params, element);

                        // Ignore if null
                        if (invoice === null) {
                            continue;
                        }

                        // Sanitize invoice
                        invoice = {
                            id: invoice.id.trim().replace(/[/\\?%*:|"<>]/g, '-'),
                            timestamp: invoice.timestamp,
                            amount: invoice.amount?.trim(),
                            link: invoice.link?.trim(),
                            metadata: invoice.metadata || {},
                            downloadData: invoice.downloadData || {}
                        }

                        // If invoice is more recent or equal to most recent timestamp and id is not in previousInvoiceIds
                        if (invoice.timestamp >= mostRecentTimestamp && !previousInvoiceIds.includes(invoice.id)){
                            // If invoice is more recent than the download_from_timestamp
                            if (download_from_timestamp <= invoice.timestamp) {
                                // If this is the first invoice to download, set progress step to downloading
                                if (firstDownload) {
                                    // Set progress step to downloading
                                    state.update(State._6_DOWNLOADING);
                                    firstDownload = false;
                                }

                                // Download invoice
                                const documents = await this.download(driver, secret.params, element, invoice);
                                console.log(`Invoice ${invoice.id} successfully downloaded`);

                                // Close extra pages opened during download
                                await driver.closeExtraPages();

                                let data;
                                // If one document downloaded
                                if (documents.length === 1) {
                                    data = documents[0];
                                }
                                else {
                                    data = await utils.mergePdfDocuments(documents);
                                }
                    
                                invoices.push({
                                    ...invoice,
                                    data,
                                    mimetype: mimetypeFromBase64(data),
                                    collected_timestamp: Date.now(),
                                    metadata: invoice.metadata || {}
                                });
                            }
                            else {
                                // Add invoice without downloading it
                                invoices.push({
                                    ...invoice,
                                    data: null,
                                    mimetype: null,
                                    collected_timestamp: null,
                                    metadata: {},
                                    downloadData: {}
                                });
                            }
                        }
                    }
                }
            });

            return invoices;
        } catch (error) {
            // Get url, source code and screenshot
            const url = driver.url();
            const source_code = await driver.sourceCode(true, true);
            const screenshot = await driver.screenshot();

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

    async _close(): Promise<void> {
        if (this.driver != null) {
            // Close the browser
            await this.driver.close();
        }
    }

    //NOT IMPLEMENTED
    async pre(driver: Driver): Promise<void> {
        // Assume the collector does not need pre actions
    }

    async needLogin(driver: Driver): Promise<boolean>{
        // If user is logged in, the URL should be equal to the entry URL
        return driver.url() !== this.config.entryUrl;
    }

    abstract login(driver: Driver, params: any): Promise<string | void>;

    async needTwofa(driver: Driver): Promise<string | void>{
        // Assume the collector does not implement 2FA
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Assume the collector does not implement 2FA
    }

    async navigate(driver: Driver, params: any): Promise<void> {
        // Assume the collector does not need to navigate
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        // Assume invoices are present
        return false;
    }

    async forEachPage(driver: Driver, params: any, next: () => void): Promise<void> {
        // Assume the collector does not have pagination
        await next();
    }

    abstract getInvoices(driver: Driver, params: any): Promise<Element[]>;

    abstract data(driver: Driver, params: any, element: Element): Promise<Invoice | null>;

    abstract download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]>;

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
