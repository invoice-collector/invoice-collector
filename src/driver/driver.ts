import path from 'path';
import fs from 'fs';
import { connect } from './puppeteer/browser';
import { Browser, DownloadPolicy, ElementHandle, Frame, KeyInput, Page, Target } from "rebrowser-puppeteer-core";
import { ElementNotFoundError, LoggableError } from '../error';
import { Proxy } from '../proxy/abstractProxy';
import * as utils from '../utils';
import { Options } from './puppeteer/browser';
import { CollectorCaptcha } from '../collectors/abstractCollector';
import { WebCollector as OldWebCollector} from '../collectors/webCollector';
import { WebCollector } from '../collectors/web2Collector';

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

    collector: OldWebCollector | WebCollector;
    browser: Browser | null;
    page: Page | null;
    downloadPath: string;
    puppeteerConfig: Options;

    constructor(collector: OldWebCollector | WebCollector) {
        this.collector = collector;
        this.browser = null;
        this.page = null;
        this.downloadPath = Driver.getDownloadPath();
        this.puppeteerConfig = Driver.getPuppeteerConfig(this.downloadPath);
    }

    async open(proxy: Proxy | null = null) {
        // If proxy is provided
        if (proxy != null) {
            // Set proxy
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

        // If must block images
        if (this.collector.config.loadImages === false) {
            await this.page.setRequestInterception(true);
            this.page.on("request", (request) => {
                if (!request.isInterceptResolutionHandled()) {
                    if (request.resourceType() === "image" && this.collector.config.loadImages === false) {
                        request.abort('aborted', 0);
                    } else {
                        request.continue(request.continueRequestOverrides(), 0);
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

    origin(): string {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        return new URL(this.page.url()).origin;
    }

    async pages(): Promise<Page[]> {
        if (this.browser === null) {
            throw new Error('Browser is not initialized.');
        }
        return this.browser.pages();
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
            await this.page.goto(url, {waitUntil: 'networkidle0', timeout: 60000});

            // Wait for the network request
            const response = await Promise.race([
                urlPromise,
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error(`Request ${network_request} not intercepted while loading page ${url}`)), 30000)
                )
            ]);

            // Return the response
            return response;
        }
        else {
            let response;
            try {
                // Navigate to the page
                response = await this.page.goto(url, {waitUntil: 'networkidle0', timeout: 30000});
            } catch (error) {
                console.warn(`Failed to navigate to ${url}, navigation timeout`);
            }

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
        // Wait for first element matching selector in any frame, null if all timed out
        const element = await Promise.any(
            this.page.frames().map(frame =>
                frame.waitForSelector(selector.selector, { timeout })
            )
        ).catch(() => null);

        if (element == null && raiseException) {
            throw new ElementNotFoundError(this.collector, selector, {
                cause: `No element matching selector "${selector.selector}"`
            })
        }

        return element ? new Element(element, this) : null;
    }

    async getElementCoordinates(x: number, y: number, context: Page | Frame | null = null): Promise<Element | null> {
        if (context == null) {
            if (this.page === null) {
                throw new Error('Page is not initialized.');
            }
            context = this.page;
        }

        const elementHandle = await context.evaluateHandle((x, y) => {
            return document.elementFromPoint(x, y);
        }, x, y);

        if (!elementHandle) {
            return null;
        }

        // Check if the element is an iframe
        const isIframe = await context.evaluate((el) => {
            return el !== null && el.tagName === 'IFRAME';
        }, elementHandle);

        if (isIframe) {
            const frameElement = await (elementHandle as ElementHandle);
            const frame = await frameElement.contentFrame();
            if (frame) {
                // Get iframe bounding box
                const frameBoundingBox = await frameElement.boundingBox();

                // If bounding box x and y are not defined
                if (!frameBoundingBox?.x || !frameBoundingBox?.y) {
                    throw new Error("Iframe bounding box x or y is not defined");
                }

                // Recursively call the function inside the iframe and remove iframe coordinates
                return this.getElementCoordinates(x - frameBoundingBox?.x, y - frameBoundingBox?.y, frame);
            }
        }

        // If not an iframe, return the element
        return new Element(elementHandle as ElementHandle, this);
    }

    async getElements(selector, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT
    } = {}): Promise<Element[]> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        await this.getElement(selector, { raiseException, timeout });
        return (await this.page.$$(selector.selector)).map(element => new Element(element, this) );
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
        return await element.element.evaluate((el, attr) => el.getAttribute(attr) ?? el[attr], attributeName);
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
            return elements.map(element => element.getAttribute(attr) ?? element[attr]);
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
            await element.click();
            await utils.delay(delay);
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

    async type(text: string, {
        delay = Driver.DEFAULT_DELAY
    } = {}): Promise<void> {
        await this.page?.keyboard.type(text);
        await utils.delay(delay);
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

    async sourceCode(base64: boolean = true): Promise<string> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        const sourceCode = (await this.page.content())
        const cleanedSourceCode = sourceCode
            .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, '')
            .replace(/<svg\b[^>]*>([\s\S]*?)<\/svg>/gi, '')
            .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, '')
            .replace(/<head\b[^>]*>([\s\S]*?)<\/head>/gi, '')
            .replace(/<iframe\b[^>]*>([\s\S]*?)<\/iframe>/gi, '');
        return base64 ? Buffer.from(cleanedSourceCode).toString('base64') : cleanedSourceCode;
    }

    // SCREENSHOT

    async screenshot() {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        return await this.page.screenshot({encoding: 'base64'});
    }

    async downloadFile(url: string): Promise<string> {
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

    async waitForFileToDownload(raiseException: boolean = true): Promise<string> {
        // Wait for file to download
        const file = await this.waitFor(async (driver) => {
            const files = fs.readdirSync(this.downloadPath).filter(file => !file.endsWith('.crdownload'));
            return files.length > 0 ? files[0] : null;
        }, `No file downloaded after ${Driver.DEFAULT_TIMEOUT}ms`,
        raiseException,
        Driver.DEFAULT_DOWNLOAD_TIMEOUT);

        // Check if no file found
        if (file === null) {
            throw new LoggableError(`No file downloaded after ${Driver.DEFAULT_DOWNLOAD_TIMEOUT}ms`, this.collector);
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
        "Datadome captcha did not succeed", true, 15000);
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
    driver: Driver;

    constructor(element: ElementHandle, driver: Driver) {
        this.element = element;
        this.driver = driver;
    }

    /**
     * Retrieves the associated element.
     *
     * @returns A promise that resolves to the ElementHandle of the associated element, or null if the element is not found.
     */
    async getElement(selector: any): Promise<Element | null> {
        const elementHandle = await this.element.$(selector.selector);
        return elementHandle ? new Element(elementHandle, this.driver) : null;
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

    async click({
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        navigation = true
    } = {}): Promise<void> {
        await this.element.click();
        await utils.delay(delay);
        if(navigation === true) {
            try {
                await this.driver.page?.waitForNavigation({timeout});
            }
            catch {}
        }
    }

    async middleClick(): Promise<Driver> {
        const baseUrl = new URL(this.driver.url() || "").origin;
        // Get number of opened pages before middle click
        const numberOfPagesBefore = (await this.driver.pages()).length;
        // Perform middle click
        await this.element.click({ button: 'middle' });
        // Wait for the new tab to open
        await utils.delay(5000);
        // Get number of opened pages after middle click
        const pages = await this.driver.pages();
        let newPage: Page;

        const numberOfPagesAfter = pages.length;
        // If no new page opened
        if (numberOfPagesAfter == numberOfPagesBefore) {
            await this.driver.page?.keyboard.press('Escape'); // Close context menu after middle click failed
            await this.driver.page?.setRequestInterception(true);
            const urlPromise = new Promise<string>((resolve, reject) => {
                setTimeout(() => reject(new Error(`Unable to intercept request for middle click`)), 10000);
                this.driver.page?.on('request', (request) => {
                    if (
                        !request.isInterceptResolutionHandled() &&
                        request.url().includes(baseUrl) &&
                        request.method() === 'GET'
                    ) {
                        request.abort('aborted', 5);
                        resolve(request.url());
                    }
                });
            });
            // Perform simple click to intercept URL
            await this.element.click();
            // Wait for the intercepted URL
            const interceptedUrl = await urlPromise;

            if (!this.driver.browser) {
                throw new Error('Browser is not initialized.');
            }

            newPage = await this.driver.browser.newPage();
            await newPage.bringToFront();
            await newPage.goto(interceptedUrl, { waitUntil: 'networkidle0' });
        }
        else {
            // Bring latest page to front
            newPage = pages[pages.length - 1];
            await newPage.bringToFront();
        }

        const driver = new Driver(this.driver.collector);
        driver.browser = this.driver.browser;
        driver.page = newPage;
        driver.downloadPath = this.driver.downloadPath;
        driver.puppeteerConfig = this.driver.puppeteerConfig;
        return driver;
    }

    async inputText(text: string, {
        tries = 5,
        timeout = Driver.DEFAULT_TIMEOUT,
        navigation = false
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
        if(navigation === true) {
            try {
                await this.driver.page?.waitForNavigation({timeout});
            }
            catch {}
        }
    }

    async getAttribute(selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element.getAttribute(attr) ?? element[attr], attribute);
    }

    async dropdownSelect(value: string): Promise<void> {
        await this.element.select(value);
    }

    async innerHTML(): Promise<string> {
        return this.element.evaluate(el => el.innerHTML);
    }

    async cssSelector(): Promise<string> {
        return await this.element.evaluate(element => {
            function getCssSelector(element): string {
                /*if (element.id) {
                    return `#${element.id}`;
                }*/
                if (element === document.body) {
                    return 'body';
                }
                let selector = element.tagName.toLowerCase();
                if (element.className && typeof element.className === 'string') {
                    const classes = element.className.trim().split(/\s+/).filter(Boolean);
                    if (classes.length) {
                        selector += '.' + classes.join('.');
                    }
                }
                let sibling = element;
                let nth = 1;
                while ((sibling = sibling.previousElementSibling)) {
                    if (sibling.tagName === element.tagName) nth++;
                }
                selector += `:nth-of-type(${nth})`;
                return getCssSelector(element.parentElement!) + ' > ' + selector;
            }
            return getCssSelector(element);
        });
    }

    /*async pages(): Promise<Page[]> {
        if (this.driver.browser === null) {
            throw new Error('Browser is not initialized.');
        }

        const targets: Target[] = this.driver.browser.targets();
        const pages: Page[] = [];
        for (const target of targets) {
            if (target.type() === 'page') {
                const page = await target.asPage();
                pages.push(page);
            }
        }
        return pages;
    }*/
}
