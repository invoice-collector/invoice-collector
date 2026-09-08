import { ElementHandle } from 'rebrowser-puppeteer-core';
import { ElementNotFoundError } from '../error';
import * as utils from '../utils';
import { AbstractDriver } from './abstractDriver';

export class Element {

    element: ElementHandle;
    driver: AbstractDriver;

    constructor(element: ElementHandle, driver: AbstractDriver) {
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
        raiseException = true,
    } = {}): Promise<Element | null> {
        const elementHandle = await this.element.$(selector.selector);
        // If element not found and must raise exception
        if (!elementHandle && raiseException) {
            const error = new ElementNotFoundError(this.driver.collector, selector, {
                cause: `No element matching selector "${selector.selector}"`,
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
        timeout = AbstractDriver.DEFAULT_TIMEOUT,
        delay = AbstractDriver.DEFAULT_DELAY,
        navigation = true,
        mouseHover = false,
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
        useFallbackMethod = false,
        timeout = AbstractDriver.DEFAULT_TIMEOUT,
    } = {}): Promise<void> {
        // If does not open in a new page by default
        if(!useFallbackMethod) {
            // Get number of opened pages before middle click
            const numberOfPagesBefore = (await this.driver.pages()).length;
            // Get number of downloaded files before middle click
            const numberOfFilesBefore = (await this.driver.getDownloadedFiles(false)).length;
            // Perform middle click
            await this.element.click({ button: 'middle' });
            // Wait for the new tab to open or file to download
            await utils.delay(timeout);
            // Get number of opened pages after middle click
            const numberOfPagesAfter = await this.driver.pages();
            // Get number of downloaded files after middle click
            const numberOfFilesAfter = (await this.driver.getDownloadedFiles(false)).length;
            // If no new page opened and no new file downloaded, set useFallbackMethod to true
            useFallbackMethod = numberOfPagesAfter.length === numberOfPagesBefore && numberOfFilesAfter === numberOfFilesBefore;
        }
        // If need to open in a new page
        if (useFallbackMethod) {
            // Get current url
            const currentUrl = this.driver.url();
            // Open new page
            await this.driver.newPage(currentUrl);
            // Click on the element again
            await this.driver.leftClick({
                selector: await this.cssSelector(),
                info: 'middle click',
            }, {
                timeout,
            });
        }
    }

    async inputText(text: string, {
        tries = 5,
        timeout = AbstractDriver.DEFAULT_TIMEOUT,
        delay = AbstractDriver.DEFAULT_DELAY,
        navigation = false,
        mouseHover = false,
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
                await utils.delay(AbstractDriver.DEFAULT_DELAY_BETWEEN_RETRIES);
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
        delay = AbstractDriver.DEFAULT_DELAY,
        mouseHover = false,
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
                if (element.getAttribute('name')) {
                    selector += `[name="${element.getAttribute('name')}"]`;
                }
                if (element.getAttribute('type')) {
                    selector += `[type="${element.getAttribute('type')}"]`;
                }
                let sibling = element;
                let nth = 1;
                while ((sibling = sibling.previousElementSibling)) {
                    if (sibling.tagName === element.tagName) {nth++;}
                }
                selector += `:nth-of-type(${nth})`;

                // If parent is null and root node is not document, it means we are in a shadow DOM and we need to get the selector of the parent element in the main DOM
                if (element.parentElement! === null && element.getRootNode() !== document) {
                    console.log('We are in a shadow DOM');
                    return `${getCssSelector(element.getRootNode().host)  } >>>> ${  selector}`;
                }
                return `${getCssSelector(element.parentElement!)  } > ${  selector}`;
            }
            return getCssSelector(element);
        });
    }

    async tagName(): Promise<string> {
        return await this.element.evaluate(el => el.tagName.toLowerCase());
    }

    async isClickable(): Promise<boolean> {
        const [isVisible, isDisabled] = await Promise.all([
            this.element.isVisible(),
            this.element.evaluate((element) => element.getAttribute('disabled') !== null),
        ]);
        return isVisible && !isDisabled;
    }
}
