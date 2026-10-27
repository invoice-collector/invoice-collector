import { ElementHandle } from 'rebrowser-puppeteer-core';
import { ElementNotFoundError } from '../../error';
import * as utils from '../../utils';
import { AbstractElement, Selector } from '../abstractElement';
import { PuppeteerDriver } from './puppeteerDriver';
import { Param } from '../../model/secret';

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
     * @inheritdoc
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
     * @inheritdoc
     */
    async textContent(_default: string): Promise<string> {
        return await this.element.evaluate(el => el.textContent) || _default;
    }

    /**
     * @inheritdoc
     */
    async leftClick(options: {
        timeout?: number,
        delay?: number,
        navigation?: boolean,
        mouseHover?: boolean | string,
        download?: boolean,
    } = {}): Promise<void> {
        const {
            timeout = PuppeteerDriver.DEFAULT_TIMEOUT,
            delay = PuppeteerDriver.DEFAULT_DELAY,
            navigation = true,
            mouseHover = false,
            download = false,
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
        if(download) {
            await this.driver.waitForFileToDownload({ raiseException: false, clean: false });
        }
        else {
            await utils.delay(delay);
            if(navigation === true) {
                await this.driver.waitForNavigation({timeout});
                
            }
        }
    }

    /**
     * @inheritdoc
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
     * @inheritdoc
     */
    async inputText(text: string | Param, options: {
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
        const rawText = typeof text === 'string' ? text : text.value;

        if (mouseHover) {
            await this.element.hover();
            await utils.delay(delay);
        }
        await this.element.scrollIntoView(); 
        if (tries > 0) {
            let currentValue = null;
            while (currentValue !== rawText && tries > 0) {
                await this.element.click({ count: 3 });     // Select all text
                await this.element.type(rawText);           // Replace
                await utils.delay(PuppeteerDriver.DEFAULT_DELAY_BETWEEN_RETRIES);
                currentValue = await this.element.evaluate((el: any) => el.value);
                tries--;
            }
        }
        else {
            await this.element.click({ count: 3 });     // Select all text
            await this.element.type(rawText);           // Replace
        }
        await utils.delay(delay);
        if(navigation === true) {
            await this.driver.waitForNavigation({timeout});
        }
    }

    /**
     * @inheritdoc
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
     * @inheritdoc
     */
    async getAttribute(selector: Selector, attribute: string): Promise<string> {
        return await this.element.$eval(selector.selector, (element, attr) => element.getAttribute(attr) ?? element[attr], attribute);
    }

    /**
     * @inheritdoc
     */
    async innerHTML(): Promise<string> {
        return this.element.evaluate(el => el.innerHTML);
    }

    /**
     * @inheritdoc
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
     * @inheritdoc
     */
    async tagName(): Promise<string> {
        return await this.element.evaluate(el => el.tagName.toLowerCase());
    }

    /**
     * @inheritdoc
     */
    async isClickable(): Promise<boolean> {
        const [isVisible, isDisabled] = await Promise.all([
            this.element.isVisible(),
            this.element.evaluate((element) => element.getAttribute('disabled') !== null),
        ]);
        return isVisible && !isDisabled;
    }
}
