import path from 'path';
import fs from 'fs';
import { connect } from './puppeteer/browser';
import type { PageWithCursor } from "./puppeteer/pageController";
import { Browser, DownloadPolicy, ElementHandle, KeyInput } from "rebrowser-puppeteer-core";
import { ElementNotFoundError, LoggableError } from '../error';
import { Proxy } from '../proxy/abstractProxy';
import * as utils from '../utils';
import { ScrapperCollector } from '../collectors/scrapperCollector';
import { Options } from './puppeteer/browser';

export class Driver {

    static DEFAULT_DOWNLOAD_TIMEOUT = 20000;    // 20 seconds
    static DEFAULT_TIMEOUT = 10000;             // 10 seconds
    static DEFAULT_POLLING = 1000;              // 1 second
    static DEFAULT_DELAY = 0; 

    static DOWNLOAD_PATH = path.resolve(__dirname, '../../media/download');
    static PUPPETEER_CONFIG: Options = {
        args: ["--start-maximized"],
        turnstile: true,
        headless: false,
        customConfig: {
            prefs: {
                download: {
                    open_pdf_in_system_reader: false,
                    prompt_for_download: false
                },
                plugins: {
                    always_open_pdf_externally: true
                }
            }
        },
        connectOption: {
            downloadBehavior: {
                policy: 'allow' as DownloadPolicy,
                downloadPath: Driver.DOWNLOAD_PATH
            },
            defaultViewport: {
                width: 1920,
                height: 1080,
            }
        }
    };

    collector: ScrapperCollector;
    browser: Browser | null;
    page: PageWithCursor | null;

    constructor(collector: ScrapperCollector) {
        this.collector = collector;
        this.browser = null;
        this.page = null;
    }

    async open(proxy: Proxy | null = null) {
        // Clone config static object
        let puppeteerConfig: Options = { ...Driver.PUPPETEER_CONFIG };
        // If proxy is provided
        if (proxy != null) {
            // Set proxy
            puppeteerConfig["proxy"] = proxy;
            console.log(`Using proxy: ${proxy.host}`);
        }
        else {
            console.log(`Do not use proxy`);
        }

        // Define if remote or local chrome must be used
        puppeteerConfig.remoteChrome = (this.collector.config.captcha == "datadome");

        // Open browser and page
        const connectResult = await connect(puppeteerConfig);
        this.browser = connectResult.browser;
        this.page = connectResult.page;

        // Block images if collector does not implement cloudflare captcha
        if (this.collector.config.captcha !== "cloudflare") {
            await this.page.setRequestInterception(true);
            this.page.on("request", (request) => {
                if (!request.isInterceptResolutionHandled()) {
                    if (request.resourceType() === "image") {
                        request.abort();
                    } else {
                        request.continue();
                    }
                }
            });
        }

        // Create download folder if not exists
        if (!fs.existsSync(Driver.DOWNLOAD_PATH)) {
            fs.mkdirSync(Driver.DOWNLOAD_PATH);
        }

        // Clear download folder
        this.clearDownloadFolder();
    }

    async close() {
        await this.browser?.close();
    }

    // URL

    url(): string {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        return this.page.url();
    }

    // GOTO
    async goto(url, network_request: string = ""): Promise<{requestBody: any, responseBody: any}> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        // If must wait for a specific network request
        if(network_request) {
            await this.page.setRequestInterception(true);
            const urlPromise = new Promise<any>((resolve) => {
                if (this.page === null) {
                    throw new Error('Page is not initialized.');
                }
                this.page.on('request', request => {
                    if (!request.isInterceptResolutionHandled()) {
                        request.continue();
                    }
                });

                this.page.on('response', async (response) => {
                    if (response.url().includes(network_request) && response.status() === 200) {
                        const requestBody = JSON.parse(response.request().postData() || '{}');
                        const responseBody = await response.json();
                        resolve({requestBody, responseBody});
                    }
                });
            });

            // Navigate to the page
            await this.page.goto(url, {waitUntil: 'networkidle0'});

            // Wait for the network request
            const response = await urlPromise;

            // Return the response
            return response;
        }
        else {
            // Navigate to the page
            await this.page.goto(url, {waitUntil: 'networkidle0'});
            return {requestBody: null, responseBody: null};
        }
    }

    // WAIT

    async waitFor(
        check_condition: Function,
        error_message: string,
        raise_exception: boolean = true,
        timeout: number = Driver.DEFAULT_TIMEOUT,
        polling: number = Driver.DEFAULT_POLLING
    ): Promise<any> {
        let startDate = Date.now()
        while ((Date.now() - startDate) < timeout) {
            const result = await check_condition(this);
            if (result != null) {
                return result;
            }
            await utils.delay(polling);
        }

        if (raise_exception) {
            throw new LoggableError(error_message, this.collector);
        }
        return null;
    }

    async wait_for_element(selector, raise_exception = true, timeout = Driver.DEFAULT_TIMEOUT) {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        try {
            return await this.page.waitForSelector(selector.selector, {timeout});
        }
        catch (err) {
            if (raise_exception) {
                throw new ElementNotFoundError(this.collector, selector, { cause: err })
            }
            return null;
        }
    }

    // ACTIONS

    async get_all_elements(selector, raise_exception = true, timeout = Driver.DEFAULT_TIMEOUT): Promise<Element[]> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.wait_for_element(selector, raise_exception, timeout);
        return (await this.page.$$(selector.selector)).map(element => new Element(element));
    }

    async get_all_attributes(selector, attributeName, raise_exception = true, timeout = Driver.DEFAULT_TIMEOUT) {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.wait_for_element(selector, raise_exception, timeout);
        return await this.page.$$eval(selector.selector, (elements, attr) => {
            return elements.map(element => element[attr]);
        }, attributeName);
    }

    async left_click(selector, {
        raise_exception = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        navigation = true
    } = {}) {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        let element = await this.wait_for_element(selector, raise_exception, timeout);
        if(element != null) {
            await utils.delay(delay);
            await element.click();
            if(navigation === true) {
                try {
                    await this.page.waitForNavigation({timeout});
                }
                catch {}
            }
        }
    }

    async input_text(selector, text, {
        raise_exception = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY
    } = {}): Promise<void> {
        let element = await this.wait_for_element(selector, raise_exception, timeout);
        if(element != null) {
            await element.type(text);
            await utils.delay(delay);
        }
    }

    async select_dropdown_menu_option(selector, option, {
        raise_exception = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY
    } = {}): Promise<void> {
        await this.wait_for_element(selector, raise_exception, timeout);
        //TODO
        throw new Error("Not implemented");
    }

    async press(key: KeyInput, occurence: number = 1): Promise<void> {
        for(let i = 0; i < occurence; i++) {
            await utils.randomDelay();
            await this.page?.keyboard.press(key);
        }
    }

    async type(text: string): Promise<void> {
        await this.page?.keyboard.type(text);
    }

    // CHECK

    async check_element_exist(selector) {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        return (await this.page.$$(selector.selector)).length > 0;
    }

    // PDF

    async pdf(): Promise<string> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        const bytes = await this.page.pdf({
            scale: 1,
            format: 'A4',
            printBackground: true,
        });
        return Buffer.from(bytes).toString('base64');
    }

    // SOURCE CODE

    async sourceCode() {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        const source_code = await this.page.content();
        return Buffer.from(source_code).toString('base64')
    }

    // SCREENSHOT

    async screenshot() {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        return await this.page.screenshot({encoding: 'base64'});
    }

    async downloadFile(url: string): Promise<string | null> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }

        // Remove all files in the download folder
        this.clearDownloadFolder();

        // Navigate to the page
        await this.page.evaluate((url) => {
            location.href = url;
        }, url);

        // Wait for file to download
        return await this.waitForFileToDownload();
    }

    async waitForFileToDownload(raise_exception: boolean = true): Promise<string | null> {
        // Wait for file to download
        const file = await this.waitFor(async (driver) => {
            const files = fs.readdirSync(Driver.DOWNLOAD_PATH).filter(file => !file.endsWith('.crdownload'));
            return files.length > 0 ? files[0] : null;
        }, `No file downloaded after ${Driver.DEFAULT_TIMEOUT}ms`,
        raise_exception,
        Driver.DEFAULT_DOWNLOAD_TIMEOUT);

        // Check if no file found
        if (file === null) {
            return null;
        }

        // Read the file
        const data = fs.readFileSync(path.join(Driver.DOWNLOAD_PATH, file), {encoding: 'base64'});

        // Clear download folder
        this.clearDownloadFolder();

        return data;
    }

    clearDownloadFolder(): void {
        // Remove all files in the download folder
        fs.readdirSync(Driver.DOWNLOAD_PATH).forEach(file => {
            fs.unlinkSync(path.join(Driver.DOWNLOAD_PATH, file));
        });
    }

    // CAPTCHAS

    async waitForCloudflareTurnstile(): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.waitFor(async (driver) => {
            const token = await driver.page.$eval("input[name='cf-turnstile-response']", (element, attr) => element[attr], "value");
            return token && token.length > 20 ? token : null;
        },
        "Cloudflare turnstile captcha did not succeed");
    }

    async waitForDatadomeCaptcha(): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.waitFor(async (driver) => {
            const iframe = await driver.page.$("iframe[title='DataDome Device Check']").catch(() => null);
            return iframe ? null : "Navigation succeeded";
        },
        "Datadome captcha did not succeed");
    }
}

export class Element {
    element: ElementHandle;
    constructor(element: ElementHandle) {
        this.element = element;
    }

    async get_attribute(selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element[attr], attribute);
    }
}
