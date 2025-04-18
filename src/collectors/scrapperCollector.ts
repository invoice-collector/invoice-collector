import { AbstractCollector, Invoice, DownloadedInvoice, CompleteInvoice } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { AuthenticationError, CollectorError, LoggableError, MaintenanceError, UnfinishedCollectorError, NoInvoiceFoundError } from '../error';
import { ProxyFactory } from '../proxy/proxyFactory';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";

export type ScrapperConfig = {
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
    entryUrl: string,
    useProxy?: boolean,
    captcha?: "datadome" | "cloudflare"
}

export abstract class ScrapperCollector extends AbstractCollector {

    static TYPE: "web" = 'web';

    driver: Driver | null;

    constructor(config: ScrapperConfig) {
        super({
            ...config,
            id: '',
            type: ScrapperCollector.TYPE,
            useProxy: config.useProxy === undefined ? true : config.useProxy,
        });
        this.driver = null;
    }

    async _collect(params: any, location: Location | null): Promise<Invoice[]> {
        // Get proxy
        const proxy = this.config.useProxy ? ProxyFactory.getProxy().get(location) : null;

        // Start browser and page
        this.driver = new Driver(this);
        await this.driver.open(proxy);

        // Open entry url
        await this.driver.goto(this.config.entryUrl);

        try {

            // Check if website is in maintenance
            const is_in_maintenance = await this.is_in_maintenance(this.driver, params)
            if (is_in_maintenance) {
                await this.driver.close()
                throw new MaintenanceError(this);
            }

            // Login
            const login_error = await this.login(this.driver, params)

            // Check if not authenticated
            if (login_error) {
                //await this.driver.close()
                throw new AuthenticationError(login_error, this);
            }

            // Collect invoices
            const invoices = await this.collect(this.driver, params)
            
            // If invoices is undefined, collector is unfinished
            if (invoices === undefined) {
                throw new UnfinishedCollectorError(this);
            }

            // If invoices is empty, collector may be broken
            if (invoices.length === 0) {
                throw new NoInvoiceFoundError(this);
            }

            return invoices;
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

    abstract login(driver: Driver, params: any): Promise<string | void>;

    abstract collect(driver: Driver, params: any): Promise<Invoice[] | void>;

    abstract download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice | void>;

    async is_in_maintenance(driver: Driver, params: any): Promise<boolean>{
        //Assume the website is not in maintenance
        return false;
    }

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
