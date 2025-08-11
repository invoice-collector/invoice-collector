import path from 'path';
import fs from 'fs';
import { connect } from './puppeteer/browser';
import type { PageWithCursor } from "./puppeteer/pageController";
import { Browser, DownloadPolicy, ElementHandle, KeyInput } from "rebrowser-puppeteer-core";
import { ElementNotFoundError, LoggableError } from '../error';
import { Proxy } from '../proxy/abstractProxy';
import * as utils from '../utils';
import { WebCollector } from '../collectors/webCollector';
import { Options } from './puppeteer/browser';
import { CollectorCaptcha } from '../collectors/abstractCollector';

export class Driver {

    static DEFAULT_DOWNLOAD_TIMEOUT = 20000;    // 20 seconds
    static DEFAULT_TIMEOUT = 10000;             // 10 seconds
    static DEFAULT_POLLING = 1000;              // 1 second
    static DEFAULT_DELAY = 0;
    static DEFAULT_DELAY_BETWEEN_KEYS = 100;    // 100 milliseconds
    static PARENT_DOWNLOAD_PATH = path.resolve(__dirname, '../../media/download');

    private static instanceCounter = 0;

    private static getDownloadPath(): string {
        Driver.instanceCounter += 1;
        return path.resolve(__dirname, Driver.PARENT_DOWNLOAD_PATH, String(Driver.instanceCounter));
    }

    private static getPuppeteerConfig(downloadPath: string): Options {
        return {
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
                    downloadPath,
                },
                defaultViewport: {
                    width: 1920,
                    height: 1080,
                }
            }
        }
    };

    collector: WebCollector;
    browser: Browser | null;
    page: PageWithCursor | null;
    downloadPath: string;
    puppeteerConfig: Options;

    constructor(collector: WebCollector) {
        this.collector = collector;
        this.browser = null;
        this.page = null;
        this.downloadPath = Driver.getDownloadPath();
        this.puppeteerConfig = Driver.getPuppeteerConfig(this.downloadPath);
    }

    async open(proxy: Proxy | null = null) {
        // If proxy is provided
        if (proxy != null) {
            this.puppeteerConfig["proxy"] = proxy;
            console.log(`Using proxy: ${proxy.host}`);
        } else {
            console.log(`Do not use proxy`);
        }

        this.puppeteerConfig.remoteChrome = (this.collector.config.captcha == CollectorCaptcha.DATADOME);

        // Open browser and page
        const connectResult = await connect(this.puppeteerConfig);
        this.browser = connectResult.browser;
        this.page = connectResult.page;

        // Block images if collector does not implement cloudflare captcha
        if (this.collector.config.captcha !== CollectorCaptcha.CLOUDFLARE) {
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
        if (!fs.existsSync(this.downloadPath)) {
            fs.mkdirSync(this.downloadPath, { recursive: true });
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
                    if (response.url().includes(network_request) && response.ok()) {
                        const requestBody = JSON.parse(response.request().postData() || '{}');
                        try {
                            const responseBody = await response.json();
                            resolve({requestBody, responseBody});
                        }
                        catch (error) {}
                    }
                });
            });

            // Navigate to the page
            await this.page.goto(url, {waitUntil: 'networkidle0', timeout: 0});

            // Wait for the network request
            const response = await urlPromise;

            // Return the response
            return response;
        }
        else {
            // Navigate to the page
            const response = await this.page.goto(url, {waitUntil: 'networkidle0', timeout: 0});
            // Check if response is 404
            if (response && response.status() == 404) {
                throw new LoggableError(`Failed to navigate to ${url}, page not found 404`, this.collector);
            }
            return {requestBody: null, responseBody: null};
        }
    }

    /**
     * Navigates to the given URL and returns the parsed JSON from the body element.
     * @param url The URL to navigate to.
     * @returns The parsed JSON object from the body.
     */
    async goToJson(url: string): Promise<any> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.page.goto(url, { waitUntil: 'networkidle0' });
        const data = await this.page.$eval("body", (element) => {
            try {
                return JSON.parse(element.innerText);
            } catch {
                return null;
            }
        });
        return data;
    }

    // WAIT

    private async waitFor(
        check_condition: Function,
        error_message: string,
        raiseException: boolean = true,
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

        if (raiseException) {
            throw new LoggableError(error_message, this.collector);
        }
        return null;
    }

    // ACTIONS

    async getElement(selector, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT
    } = {}): Promise<Element | null> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        try {
            const element = await this.page.waitForSelector(selector.selector, {timeout});
            return element ? new Element(element) : null;
        }
        catch (err) {
            if (raiseException) {
                throw new ElementNotFoundError(this.collector, selector, { cause: err })
            }
            return null;
        }
    }

    async getElements(selector, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT
    } = {}): Promise<Element[]> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.getElement(selector, { raiseException, timeout });
        return (await this.page.$$(selector.selector)).map(element => new Element(element));
    }

    async getAttribute(selector, attributeName, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT
    } = {}): Promise<string> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        const element = await this.getElement(selector, { raiseException, timeout });
        if (element == null) {
            if (raiseException) {
                throw new ElementNotFoundError(this.collector, selector);
            }
            return '';
        }
        return await element.element.evaluate((el, attr) => el[attr], attributeName);
    }

    async getAttributes(selector, attributeName, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT
    } = {}) {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.getElement(selector, { raiseException, timeout });
        return await this.page.$$eval(selector.selector, (elements, attr) => {
            return elements.map(element => element[attr]);
        }, attributeName);
    }

    async leftClick(selector, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        navigation = true
    } = {}): Promise<Element | null> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        let element = await this.getElement(selector, { raiseException, timeout });
        if(element != null) {
            await utils.delay(delay);
            await element.click();
            if(navigation === true) {
                try {
                    await this.page.waitForNavigation({timeout});
                }
                catch {}
            }
            return element;
        }
        return null;
    }

    async inputText(selector, text, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        tries = 5
    } = {}): Promise<void> {
        let element = await this.getElement(selector, { raiseException, timeout });
        if(element != null) {
            await element.inputText(text, { tries });
            await utils.delay(delay);
        }
    }

    async dropdownSelect(selector, value: string, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY
    } = {}): Promise<void> {
        const element = await this.getElement(selector, { raiseException, timeout });
        if (element) {
            await element.dropdownSelect(value);
            await utils.delay(delay);
        }
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

    async waitForFileToDownload(raiseException: boolean = true): Promise<string | null> {
        // Wait for file to download
        const file = await this.waitFor(async (driver) => {
            const files = fs.readdirSync(this.downloadPath).filter(file => !file.endsWith('.crdownload'));
            return files.length > 0 ? files[0] : null;
        }, `No file downloaded after ${Driver.DEFAULT_TIMEOUT}ms`,
        raiseException,
        Driver.DEFAULT_DOWNLOAD_TIMEOUT);

        // Check if no file found
        if (file === null) {
            return null;
        }

        // Read the file
        const data = fs.readFileSync(path.join(this.downloadPath, file), {encoding: 'base64'});

        // Clear download folder
        this.clearDownloadFolder();

        return data;
    }

    clearDownloadFolder(): void {
        // Remove all files in the download folder
        if (fs.existsSync(this.downloadPath)) {
            fs.readdirSync(this.downloadPath).forEach(file => {
                fs.unlinkSync(path.join(this.downloadPath, file));
            });
        }
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

    // COOKIES

    async getCookies(namesToGet: string[] | undefined): Promise<any> {
        // If namesToGet is undefined, return empty object
        if (namesToGet === undefined) {
            return [];
        }

        // If browser is undefined
        if (!this.browser) {
            return [];
        }

        return (await this.browser?.cookies())
            .filter(cookie => namesToGet.length === 0 || namesToGet.some(name => cookie.name.includes(name)));
    }

    async setCookies(cookies: any): Promise<void> {
        if (cookies) {
            await this.browser?.setCookie(...cookies);
        }
    }

    // LOCAL STORAGE

    async getLocalStorage(keysToGet: string[] | undefined): Promise<any> {
        // If keysToGet is undefined, return empty object
        if (keysToGet === undefined) {
            return {};
        }

        return await this.page?.evaluate((keysToGet: string[]) => {
            const localStorage: { [key: string]: string } = {};
            for (const [key, value] of Object.entries(window.localStorage)) {
                // If keysToGet is empty, return all localStorage
                if (keysToGet.length === 0) {
                    localStorage[key] = value;
                }
                // If only specific keys are needed
                else {
                    for (const keyToGet of keysToGet) {
                        // Get only specific key
                        if (key.includes(keyToGet)) {
                            localStorage[key] = value;
                        }
                    }
                }
            }
            return localStorage;
        }, keysToGet);
    }

    async setLocalStorage(data: any): Promise<void> {
        if (data) {
            await this.page?.evaluateOnNewDocument((data) => {
                for (const [key, value] of Object.entries(data)) {
                    window.localStorage.setItem(key, String(value));
                }
            }, data);
        }
    }

}

export class Element {

    element: ElementHandle;

    constructor(element: ElementHandle) {
        this.element = element;
    }

    /**
     * Retrieves the text content of the associated element.
     *
     * @param _default - A default string value.
     * @returns A promise that resolves to the text content of the element, or the default value if the element's text content is null.
     */
    async textContent(_default: string): Promise<string> {
        return this.element.evaluate(el => el.textContent ?? _default);
    }

    async click(): Promise<void> {
        await this.element.click();
    }

    async inputText(text: string, {
        tries = 5
    } = {}): Promise<void> {
        if (tries > 0) {
            let currentValue = null;
            while (currentValue !== text && tries > 0) {
                await this.element.click({ clickCount: 3 });    // Select all text
                await this.element.type(text);                  // Replace
                await utils.delay(Driver.DEFAULT_DELAY_BETWEEN_KEYS);
                currentValue = await this.element.evaluate((el: any) => el.value);
                tries--;
            }
        }
        else {
            await this.element.click({ clickCount: 3 });    // Select all text
            await this.element.type(text);                  // Replace
        }
    }

    async getAttribute(selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element[attr], attribute);
    }

    async dropdownSelect(value: string): Promise<void> {
        await this.element.select(value);
    }
}
