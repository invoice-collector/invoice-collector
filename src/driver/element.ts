import { ElementHandle } from 'rebrowser-puppeteer-core';
import { ElementNotFoundError } from '../error';
import * as utils from '../utils';
import { AbstractDriver } from './abstractDriver';

export class Element {

    element: ElementHandle;
    driver: AbstractDriver;

    /**
     * Constructs a new instance of the Element class.
     * @param element The ElementHandle associated with this element.
     * @param driver The AbstractDriver instance associated with this element.
     */
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
     * @param _default A default string value.
     * @returns A promise that resolves to the text content of the element, or the default value if the element's text content is null.
     */
    async textContent(_default: string): Promise<string> {
        return await this.element.evaluate(el => el.textContent) || _default;
    }

    /**
     * Left clicks on the element.
     * @param timeout The timeout for the click action. Default is {@link AbstractDriver.DEFAULT_TIMEOUT}.
     * @param delay The delay before the click action. Default is {@link AbstractDriver.DEFAULT_DELAY}.
     * @param navigation Whether to wait for navigation after the click. Default is `true`.
     * @param mouseHover Whether to hover the mouse over the element before clicking. Default is `false`.
     */
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

    /**
     * Middle clicks on the element.
     * @param useFallbackMethod Whether to use the fallback method for middle click. Default is `false`.
     * @param timeout The timeout for the middle click action. Default is {@link AbstractDriver.DEFAULT_TIMEOUT}.
     */
    async middleClick({
        useFallbackMethod = false,
        timeout = AbstractDriver.DEFAULT_TIMEOUT,
    } = {}): Promise<void> {
        // If does not open in a new page by default
        if(!useFallbackMethod) {
            // Get number of opened pages before middle click
            const numberOfPagesBefore = await this.driver.numberOfPages();
            // Get number of downloaded files before middle click
            const numberOfFilesBefore = (await this.driver.getDownloadedFiles(false)).length;
            // Perform middle click
            await this.element.click({ button: 'middle' });
            // Wait for the new tab to open or file to download
            await utils.delay(timeout);
            // Get number of opened pages after middle click
            const numberOfPagesAfter = await this.driver.numberOfPages();
            // Get number of downloaded files after middle click
            const numberOfFilesAfter = (await this.driver.getDownloadedFiles(false)).length;
            // If no new page opened and no new file downloaded, set useFallbackMethod to true
            useFallbackMethod = numberOfPagesAfter === numberOfPagesBefore && numberOfFilesAfter === numberOfFilesBefore;
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

    /**
     * Inputs text into the element, with options for retries, delays, and navigation handling.
     * @param text The text to input into the element.
     * @param param1.tries The number of attempts to input the text. Default is `5`.
     * @param param1.timeout The timeout for each attempt. Default is {@link AbstractDriver.DEFAULT_TIMEOUT}.
     * @param param1.delay The delay between each attempt. Default is {@link AbstractDriver.DEFAULT_DELAY}.
     * @param param1.navigation Whether to wait for navigation after inputting the text. Default is `false`.
     * @param param1.mouseHover Whether to hover the mouse over the element before inputting the text. Default is `false`.
     */
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

    /**
     * Selects a value from a dropdown element.
     * @param value The value to select in the dropdown.
     * @param param1.delay The delay before and after selecting the value. Default is {@link AbstractDriver.DEFAULT_DELAY}.
     * @param param1.mouseHover Whether to hover the mouse over the element before selecting the value. Default is `false`.
     */
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

    /**
     * Gets the value of the specified attribute from the element matching the selector.
     * @param selector The selector of the element to get the attribute from.
     * @param attribute The name of the attribute to retrieve.
     * @returns The value of the specified attribute, or the property value if the attribute is not present.
     */
    async getAttribute(selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element.getAttribute(attr) ?? element[attr], attribute);
    }

    /**
     * Gets the inner HTML content of the element.
     * @returns The inner HTML content of the element.
     */
    async innerHTML(): Promise<string> {
        return this.element.evaluate(el => el.innerHTML);
    }

    /**
     * Gets the CSS selector of the element.
     * @returns The CSS selector of the element.
     */
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

    /**
     * Gets the tag name of the element in lowercase.
     * @returns The tag name of the element in lowercase.
     */
    async tagName(): Promise<string> {
        return await this.element.evaluate(el => el.tagName.toLowerCase());
    }

    /**
     * Checks if the element is clickable.
     * @returns `true` if the element is clickable, otherwise `false`.
     */
    async isClickable(): Promise<boolean> {
        const [isVisible, isDisabled] = await Promise.all([
            this.element.isVisible(),
            this.element.evaluate((element) => element.getAttribute('disabled') !== null),
        ]);
        return isVisible && !isDisabled;
    }
}
