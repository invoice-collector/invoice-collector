import { ElementHandle } from 'rebrowser-puppeteer-core';
import { ElementNotFoundError } from '../../error';
import * as utils from '../../utils';
import { AbstractElement, Selector } from '../abstractElement';
import { PuppeteerDriver } from './puppeteerDriver';

export class PuppeteerElement extends AbstractElement<PuppeteerDriver> {

    element: ElementHandle;

    /**
     * Constructs a new instance of the Element class.
     * @param element The ElementHandle associated with this element.
     * @param driver The PuppeteerDriver instance associated with this element.
     */
    constructor(element: ElementHandle, driver: PuppeteerDriver) {
        super(driver);
        this.element = element;
    }

    /**
     * Retrieves the associated element.
     *
     * @returns The ElementHandle of the associated element, or null if the element is not found.
     */
    async getElement(selector: Selector, options?: { raiseException?: true }): Promise<PuppeteerElement>;
    async getElement(selector: Selector, options: { raiseException: false }): Promise<PuppeteerElement | null>;
    async getElement(selector: Selector, {
        raiseException = true,
    } = {}): Promise<PuppeteerElement | null> {
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
        return elementHandle ? new PuppeteerElement(elementHandle, this.driver) : null;
    }

    /**
     * Retrieves the text content of the associated element.
     *
     * @param _default A default string value.
     * @returns The text content of the element, or the default value if the element's text content is null.
     */
    async textContent(_default: string): Promise<string> {
        return await this.element.evaluate(el => el.textContent) || _default;
    }

    /**
     * Left clicks on the element.
     * @param options The left click options.
     * @param options.timeout The timeout for the click action. Default is {@link PuppeteerDriver.DEFAULT_TIMEOUT}.
     * @param options.delay The delay after the click action. Default is {@link PuppeteerDriver.DEFAULT_DELAY}.
     * @param options.navigation Whether to wait for navigation after the click. Default is `true`.
     * @param options.mouseHover Whether to hover the mouse over the element before clicking. Default is `false`. Can also be a string representing a selector for the element to hover over.
     */
    async leftClick(options: {
        timeout?: number,
        delay?: number,
        navigation?: boolean,
        mouseHover?: boolean | string,
    } = {}): Promise<void> {
        const {
            timeout = PuppeteerDriver.DEFAULT_TIMEOUT,
            delay = PuppeteerDriver.DEFAULT_DELAY,
            navigation = true,
            mouseHover = false,
        } = options;

        await this.element.scrollIntoView();
        if (mouseHover) {
            if (typeof mouseHover === 'string') {
                const hoverElement = await this.getElement({
                    selector: mouseHover,
                    info: 'mouse hover element',
                });
                await hoverElement.element.hover();
            }
            else {
                await this.element.hover();
            }
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
     * @param options The middle click options.
     * @param options.useFallbackMethod Whether to use the fallback method for middle click. Default is `false`.
     * @param options.timeout The timeout for the middle click action. Default is {@link PuppeteerDriver.DEFAULT_TIMEOUT}.
     * @param options.delay The delay after the middle click action. Default is {@link PuppeteerDriver.DEFAULT_TIMEOUT}.
     * @param options.mouseHover Whether to hover the mouse over the element before middle clicking. Default is `false`. Can also be a string representing a selector for the element to hover over.
     * @returns `true` if the fallback method was used, `false` otherwise.
     */
    async middleClick(options: {
        useFallbackMethod?: boolean,
        timeout?: number,
        delay?: number,
        mouseHover?: boolean | string,
    } = {}): Promise<boolean> {
        let {
            useFallbackMethod = false,
            timeout = PuppeteerDriver.DEFAULT_TIMEOUT,
            delay = PuppeteerDriver.DEFAULT_TIMEOUT,
            mouseHover = false,
        } = options;

        // If does not open in a new page by default
        if(!useFallbackMethod) {
            // Get number of opened pages before middle click
            const numberOfPagesBefore = await this.driver.numberOfPages();
            // Get number of downloaded files before middle click
            const numberOfFilesBefore = (await this.driver.getDownloadedFiles(false)).length;
            // Scroll the element into view before performing the middle click
            await this.element.scrollIntoView();
            if (mouseHover) {
                if (typeof mouseHover === 'string') {
                    const hoverElement = await this.getElement({
                        selector: mouseHover,
                        info: 'mouse hover element',
                    });
                    await hoverElement.element.hover();
                }
                else {
                    await this.element.hover();
                }
                await utils.delay(delay);
            }
            // Perform middle click
            await this.element.click({ button: 'middle' });
            // Wait for the new tab to open or file to download
            await utils.delay(delay);
            // Get number of opened pages after middle click
            const numberOfPagesAfter = await this.driver.numberOfPages();
            // Get number of downloaded files after middle click
            const numberOfFilesAfter = (await this.driver.getDownloadedFiles(false)).length;
            // If no new page opened and no new file downloaded, set useFallbackMethod to true
            useFallbackMethod = numberOfPagesAfter === numberOfPagesBefore && numberOfFilesAfter === numberOfFilesBefore;
        }

        // If the middle click did not open a new page, use the fallback method
        if(useFallbackMethod) {
            // Get current URL before opening a new page
            const currentUrl = this.driver.url();
            // Open a new page with the current URL
            await this.driver.newPage(currentUrl);
            // Get new element
            const newElement = await this.driver.getElement({
                selector: await this.cssSelector(),
                info: 'new element after opening new page',
            }, {
                raiseException: true,
                timeout: timeout
            }) as PuppeteerElement;
            // Scroll the element into view before performing the left click
            await newElement.element.scrollIntoView(); 
            // Hover the mouse over the element if required
            if (mouseHover) {
                if (typeof mouseHover === 'string') {
                    const hoverElement = await newElement.getElement({
                        selector: mouseHover,
                        info: 'mouse hover element',
                    });
                    await hoverElement.element.hover();
                }
                else {
                    await newElement.element.hover();
                }
                await utils.delay(delay);
            }
            // Perform the left click on the element
            await newElement.leftClick({
                timeout: timeout,
            });
            // Wait for any potential navigation or actions to complete
            await utils.delay(delay);
        }
        return useFallbackMethod
    }

    /**
     * Inputs text into the element, with options for retries, delays, and navigation handling.
     * @param text The text to input into the element.
     * @param options The input options.
     * @param options.tries The number of attempts to input the text. Default is `5`.
     * @param options.timeout The timeout for each attempt. Default is {@link PuppeteerDriver.DEFAULT_TIMEOUT}.
     * @param options.delay The delay between each attempt. Default is {@link PuppeteerDriver.DEFAULT_DELAY}.
     * @param options.navigation Whether to wait for navigation after inputting the text. Default is `false`.
     * @param options.mouseHover Whether to hover the mouse over the element before inputting the text. Default is `false`.
     */
    async inputText(text: string, options: {
        tries?: number,
        timeout?: number,
        delay?: number,
        navigation?: boolean,
        mouseHover?: boolean,
    } = {}): Promise<void> {
        let {
            tries = 5,
            timeout = PuppeteerDriver.DEFAULT_TIMEOUT,
            delay = PuppeteerDriver.DEFAULT_DELAY,
            navigation = false,
            mouseHover = false,
        } = options;

        if (mouseHover) {
            await this.element.hover();
            await utils.delay(delay);
        }
        await this.element.scrollIntoView(); 
        if (tries > 0) {
            let currentValue = null;
            while (currentValue !== text && tries > 0) {
                await this.element.click({ clickCount: 3 });    // Select all text
                await this.element.type(text);                  // Replace
                await utils.delay(PuppeteerDriver.DEFAULT_DELAY_BETWEEN_RETRIES);
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
     * @param options The dropdown selection options.
     * @param options.delay The delay before and after selecting the value. Default is {@link PuppeteerDriver.DEFAULT_DELAY}.
     * @param options.mouseHover Whether to hover the mouse over the element before selecting the value. Default is `false`.
     */
    async dropdownSelect(value: string, options: {
        delay?: number,
        mouseHover?: boolean,
    } = {}): Promise<void> {
        const {
            delay = PuppeteerDriver.DEFAULT_DELAY,
            mouseHover = false,
        } = options;

        await this.element.scrollIntoView(); 
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
    async getAttribute(selector: Selector, attribute: string): Promise<string> {
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
            /**
             * Gets the CSS selector of the given element.
             * @param element The element to get the CSS selector for.
             * @returns The CSS selector of the given element.
             */
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
