import path from 'path';
import { ElementHandle, Frame, KeyInput, Page } from "rebrowser-puppeteer-core";
import { ElementNotFoundError, LoggableError } from '../error';
import { Proxy } from '../proxy/abstractProxy';
import * as utils from '../utils';
import { CollectorCaptcha } from '../collectors/abstractCollector';
import { WebCollector as OldWebCollector} from '../collectors/webCollector';
import { WebCollector } from '../collectors/webCollector';
import { BrowserFactory } from './chrome/browserFactory';
import { AbstractBrowser } from './puppeteer/abstractBrowser';

export class Driver {

    static DEFAULT_NAVIGATION_TIMEOUT = 30000;  // 30 seconds
    static DEFAULT_DOWNLOAD_TIMEOUT = 20000;    // 20 seconds
    static DEFAULT_TIMEOUT = 10000;             // 10 seconds
    static DEFAULT_POLLING = 1000;              // 1 second
    static DEFAULT_DELAY = 1000;                // 1 second
    static DEFAULT_DELAY_BETWEEN_RETRIES = 100; // 100 milliseconds
    static PARENT_DOWNLOAD_PATH = path.resolve(__dirname, '../../media/download');

    static VIEWPORT_WIDTH: number = 1920;
    static VIEWPORT_HEIGHT: number = 1080;

    collector: OldWebCollector | WebCollector;
    browser: AbstractBrowser;
    page: Page | null;

    constructor(collector: OldWebCollector | WebCollector) {
        this.collector = collector;
        this.browser = BrowserFactory.getBrowser(this.collector.config.captcha == CollectorCaptcha.DATADOME)
        this.page = null;
    }

    async open(proxy: Proxy | null = null) {

        // Open browser and page
        this.page = await this.browser.connect(proxy);

        // If must block images
        if (this.collector.config.loadImages === false) {
            await this.page.setRequestInterception(true);
            this.page.on("request", (request) => {
                if (!request.isInterceptResolutionHandled()) {
                    if (request.resourceType() === "image" && this.collector.config.loadImages === false && !request.url().includes("cloudflare.com")) {
                        request.abort('aborted', 0);
                    } else {
                        request.continue(request.continueRequestOverrides(), 0);
                    }
                }
            });
        }

        // Clear download folder
        await this.browser.getDownloadedFiles();

        // Listen for new page and update page
        this.browser.puppeteerBrowser.on('targetcreated', async (target) => {
            const newPage = await target.page();
            if (newPage && this.page !== newPage) {
                this.page = newPage;
                this.page.bringToFront();
            }
        });

        // Listen for closed page and update page
        this.browser.puppeteerBrowser.on('targetdestroyed', async (target) => {
            const closedPage = await target.page();
            if (closedPage && this.page === closedPage) {
                const pages = await this.pages();
                if(pages.length > 0) {
                    this.page = pages[pages.length - 1];
                }
            }
        });
    }

    async close() {
        await this.browser.close();
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
        return this.browser.puppeteerBrowser.pages();
    }

    async closePage(): Promise<void> {
        // Close curretn page
        await this.page?.close();
    }

    async closeExtraPages(): Promise<void> {
        // Get all pages
        let pages = await this.pages();
        // Remove the first page
        pages.shift();
        // Close all other pages
        pages.forEach(async page => {
            await page.close();
        });
    }

    async goBack(): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        try {
            // Navigate to previous page
            await this.page.goBack({ waitUntil: 'networkidle0', timeout: Driver.DEFAULT_NAVIGATION_TIMEOUT });
        } catch (error) {
            console.warn(`Failed to navigate to previous page, navigation timeout`);
        }
    }

    // GOTO

    async goto(url: string | undefined, {
        timeout = Driver.DEFAULT_NAVIGATION_TIMEOUT,
        navigation = true
    } = {}): Promise<void> {
        if(url === undefined) {
            throw new Error('URL is undefined.');
        }
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }

        try {
            if(navigation) {
                // Navigate to the page and wait for navigation
                await this.page.goto(url, {waitUntil: 'networkidle0', timeout: timeout});
            } else {
                // Navigate to the page without waiting for navigation
                await this.page.goto(url, {waitUntil: 'domcontentloaded', timeout: timeout});
            }
        } catch (error) {
            console.warn(`Failed to navigate to ${url}, navigation timeout`);
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
        await this.page.goto(url, { waitUntil: 'networkidle0', timeout: Driver.DEFAULT_NAVIGATION_TIMEOUT });
        const data = await this.page.$eval("body", (element) => {
            try {
                return JSON.parse(element.innerText);
            } catch {
                return null;
            }
        });
        return data;
    }

    async newPage(url: string): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        // Create new page
        await this.page.browser().newPage();
        // Navigate to URL
        await this.goto(url);
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
            const error = new LoggableError(error_message, this.collector);
            error.url = this.url();
            error.source_code = await this.sourceCode(true, true);
            error.screenshot = await this.screenshot();
            throw error;
        }
        return null;
    }

    async waitForNavigation({
        timeout = Driver.DEFAULT_TIMEOUT,
    } = {}): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        try {
            await this.page.waitForNavigation({timeout});
        }
        catch {}
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
            const error = new ElementNotFoundError(this.collector, selector, {
                cause: `No element matching selector "${selector.selector}"`
            })
            error.url = this.url();
            error.source_code = await this.sourceCode(true, true);
            error.screenshot = await this.screenshot();
            throw error;
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
            function elementFromPointDeep(x: number, y: number, currentRoot: DocumentOrShadowRoot): globalThis.Element | null {
                const el = currentRoot.elementFromPoint(x, y);
                if (!el) {
                    return null;
                }
                if (el.shadowRoot) {
                    return elementFromPointDeep(x, y, el.shadowRoot);
                }
                return el;
            }
            return elementFromPointDeep(x, y, document);
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
        return (await this.page.$$(selector.selector)).map(element => new Element(element, this));
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
                const error = new ElementNotFoundError(this.collector, selector);
                error.url = this.url();
                error.source_code = await this.sourceCode(true, true);
                error.screenshot = await this.screenshot();
                throw error;
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
        navigation = true,
        mouseHover = false
    } = {}): Promise<Element | null> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        let element = await this.getElement(selector, { raiseException, timeout });
        if(element != null) {
            await element.leftClick({ timeout, delay, navigation, mouseHover });
            return element;
        }
        return null;
    }

    async inputText(selector, text, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        tries = 5,
        mouseHover = false
    } = {}): Promise<Element | null> {
        let element = await this.getElement(selector, { raiseException, timeout });
        if(element != null) {
            await element.inputText(text, { tries, timeout, delay, mouseHover });
            return element;
        }
        return null;
    }

    async dropdownSelect(selector, value: string, {
        raiseException = true,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        mouseHover = false
    } = {}): Promise<Element | null> {
        const element = await this.getElement(selector, { raiseException, timeout });
        if (element) {
            await element.dropdownSelect(value, { delay, mouseHover });
            return element;
        }
        return null;
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

    async sourceCode(base64: boolean, includeIframes: boolean): Promise<string> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }

        // If current url is about:blank, return empty string
        if (this.url() === 'about:blank') {
            return '';
        }

        let frames;
        // If not including iframes
        if (!includeIframes) {
            // Use only the main frame
            frames = [this.page.mainFrame()];
        }
        else {
            // Use all frames
            frames = this.page.frames();
        }

        // Get source code of all frames, removing scripts, svgs, styles, heads and iframes
        const framesSourceCode = await Promise.all(
            frames.map(async frame => {
                try {
                    const sourceCode = (await frame.content())
                    return sourceCode
                        .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, '')
                        .replace(/<svg\b[^>]*>([\s\S]*?)<\/svg>/gi, '')
                        .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, '')
                        .replace(/<head\b[^>]*>([\s\S]*?)<\/head>/gi, '')
                        .replace(/<iframe\b[^>]*>([\s\S]*?)<\/iframe>/gi, '');
                } catch (error) {
                    return `<!-- Unable to retrieve frame content. Error: ${error} -->`;
                }
            })
        );

        const fullSourceCode = framesSourceCode.join('\n<!-- ========== FRAME SEPARATOR ========== -->\n');
        return base64 ? Buffer.from(fullSourceCode).toString('base64') : fullSourceCode;
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

        // Get downloaded files and remove all files in the download folder
        await this.browser.getDownloadedFiles();

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
            const files = await this.browser.getDownloadedFiles();
            return files && files.length > 0 ? files[0] : null;
        }, `No file downloaded after ${Driver.DEFAULT_TIMEOUT}ms`,
        raiseException,
        Driver.DEFAULT_DOWNLOAD_TIMEOUT);

        // Check if no file found
        if (file === null) {
            const error = new LoggableError(`No file downloaded after ${Driver.DEFAULT_DOWNLOAD_TIMEOUT}ms`, this.collector);
            error.url = this.url();
            error.source_code = await this.sourceCode(true, true);
            error.screenshot = await this.screenshot();
            throw error;
        }

        return file;
    }

    // CAPTCHAS

    async waitForCloudflareTurnstile(): Promise<void> {
        if (this.page === null) {
            throw new Error('Page is not initialized.');
        }
        // Wait for Cloudflare turnstile value to be present
        await this.getElement({
            selector: "input[name='cf-turnstile-response'][value]",
            info: "Cloudflare turnstile response input with value"
        }, {
            raiseException: false
        });
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

        return (await this.browser.puppeteerBrowser.cookies())
            .filter(cookie => namesToGet.length === 0 || namesToGet.some(name => cookie.name.includes(name)));
    }

    async setCookies(cookies: any): Promise<void> {
        if (cookies) {
            await this.browser.puppeteerBrowser.setCookie(...cookies);
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
    async getElement(selector: any, options?: { raiseException?: true }): Promise<Element>;
    async getElement(selector: any, options: { raiseException: false }): Promise<Element | null>;
    async getElement(selector: any, {
        raiseException = true
    } = {}): Promise<Element | null> {
        const elementHandle = await this.element.$(selector.selector);
        // If element not found and must raise exception
        if (!elementHandle && raiseException) {
            const error = new ElementNotFoundError(this.driver.collector, selector, {
                cause: `No element matching selector "${selector.selector}"`
            });
            error.url = this.driver.url();
            error.source_code = await this.driver.sourceCode(true, true);
            error.screenshot = await this.driver.screenshot();
            throw error;
        }
        return elementHandle ? new Element(elementHandle, this.driver) : null;
    }

    /**
     * Retrieves the text content of the associated element.
     *
     * @param _default - A default string value.
     * @returns A promise that resolves to the text content of the element, or the default value if the element's text content is null.
     */
    async textContent(_default: string): Promise<string> {
        return await this.element.evaluate(el => el.textContent) || _default;
    }

    async leftClick({
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        navigation = true,
        mouseHover = false
    } = {}): Promise<void> {
        if (mouseHover) {
            await this.element.hover();
            await utils.delay(delay);
        }
        await this.element.click();
        await utils.delay(delay);
        if(navigation === true) {
            await this.driver.waitForNavigation({timeout});
        }
    }

    async middleClick({
        useFallbackMethod = false
    } = {}): Promise<void> {
        // If does not open in a new page by default
        if(!useFallbackMethod) {
            // Get number of opened pages before middle click
            const numberOfPagesBefore = (await this.driver.pages()).length;
            // Perform middle click
            await this.element.click({ button: 'middle' });
            // Wait for the new tab to open
            await utils.delay(5000);
            // Get number of opened pages after middle click
            const pages = await this.driver.pages();
            // If no new page opened, set useFallbackMethod to true
            useFallbackMethod = pages.length == numberOfPagesBefore;
        }
        // If need to open in a new page
        if (useFallbackMethod) {
            // Get current url
            const currentUrl = this.driver.url();
            // Open new page
            await this.driver.browser.puppeteerBrowser.newPage();
            // Navigate to current url
            await this.driver.goto(currentUrl);
            // Click on the element again
            await this.driver.leftClick({
                selector: await this.cssSelector(),
                info: "middle click"
            });
        }
    }

    async inputText(text: string, {
        tries = 5,
        timeout = Driver.DEFAULT_TIMEOUT,
        delay = Driver.DEFAULT_DELAY,
        navigation = false,
        mouseHover = false
    } = {}): Promise<void> {
        if (mouseHover) {
            await this.element.hover();
            await utils.delay(delay);
        }
        if (tries > 0) {
            let currentValue = null;
            while (currentValue !== text && tries > 0) {
                await this.element.click({ clickCount: 3 });    // Select all text
                await this.element.type(text);                  // Replace
                await utils.delay(Driver.DEFAULT_DELAY_BETWEEN_RETRIES);
                currentValue = await this.element.evaluate((el: any) => el.value);
                tries--;
            }
        }
        else {
            await this.element.click({ clickCount: 3 });    // Select all text
            await this.element.type(text);                  // Replace
        }
        await utils.delay(delay);
        if(navigation === true) {
            await this.driver.waitForNavigation({timeout});
        }
    }

    async dropdownSelect(value: string, {
        delay = Driver.DEFAULT_DELAY,
        mouseHover = false
    } = {}): Promise<void> {
        if (mouseHover) {
            await this.element.hover();
            await utils.delay(delay);
        }
        await this.element.select(value);
        await utils.delay(delay);
    }

    async getAttribute(selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element.getAttribute(attr) ?? element[attr], attribute);
    }

    async innerHTML(): Promise<string> {
        return this.element.evaluate(el => el.innerHTML);
    }

    async cssSelector(): Promise<string> {
        return await this.element.evaluate(element => {
            function getCssSelector(element): string {
                if (element === document.body) {
                    return 'body';
                }
                let selector = element.tagName.toLowerCase();
                let sibling = element;
                let nth = 1;
                while ((sibling = sibling.previousElementSibling)) {
                    if (sibling.tagName === element.tagName) nth++;
                }
                selector += `:nth-of-type(${nth})`;

                // If parent is null and root node is not document, it means we are in a shadow DOM and we need to get the selector of the parent element in the main DOM
                if (element.parentElement! === null && element.getRootNode() !== document) {
                    console.log("We are in a shadow DOM");
                    return getCssSelector(element.getRootNode().host) + ' >>>> ' + selector;
                }
                return getCssSelector(element.parentElement!) + ' > ' + selector;
            }
            return getCssSelector(element);
        });
    }
}
