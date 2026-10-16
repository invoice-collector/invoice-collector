import { ElementNotFoundError } from '../../error';
import { AbstractElement } from '../abstractElement';
import { ExtensionDriver } from './extensionDriver';
import { ElementRef, Selector } from './protocol';

export class ExtensionElement extends AbstractElement<ExtensionDriver> {
    constructor(
        private readonly ref: ElementRef,
        driver: ExtensionDriver,
    ) {
        super(driver);
    }

    async getElement(selector: Selector, options?: { raiseException?: true }): Promise<ExtensionElement>;
    async getElement(selector: Selector, options: { raiseException: false }): Promise<ExtensionElement | null>;
    async getElement(selector: Selector, options: { raiseException?: boolean } = {
        raiseException: true
    }): Promise<ExtensionElement | null> {
        const result = await this.driver.elementRequest<{ element: ElementRef | null }>(
            'element.getElement', this.ref, { selector, raiseException: options.raiseException ?? true },
        );
        
        // If element not found and must raise exception
        if (!result.element && options.raiseException === true) {
            const error = new ElementNotFoundError(this.driver.collector, selector, {
                cause: `No element matching selector "${selector.selector}"`,
            });
            error.url = this.driver.url();
            error.source_code = await this.driver.sourceCode(true, true);
            error.screenshot = await this.driver.screenshot();
            throw error;
        }
        return result.element ? new ExtensionElement(result.element, this.driver) : null;
    }

    async textContent(defaultValue: string): Promise<string> {
        const result = await this.driver.elementRequest<{ value: string | null }>(
            'element.textContent', this.ref,
        );
        return result.value || defaultValue;
    }

    async leftClick(options: {
        timeout?: number;
        delay?: number;
        navigation?: boolean;
        mouseHover?: boolean | string;
    } = {}): Promise<void> {
        await this.driver.elementRequest('element.leftClick', this.ref, options);
    }

    async middleClick(options: {
        useFallbackMethod?: boolean;
        timeout?: number;
        delay?: number;
        mouseHover?: boolean | string;
    } = {}): Promise<boolean> {
        return this.driver.elementRequest<boolean>('element.middleClick', this.ref, options);
    }

    async inputText(text: string, options: {
        tries?: number;
        timeout?: number;
        delay?: number;
        navigation?: boolean;
        mouseHover?: boolean;
    } = {}): Promise<void> {
        await this.driver.elementRequest('element.inputText', this.ref, { ...options, text });
    }

    async dropdownSelect(value: string, options: { delay?: number; mouseHover?: boolean } = {}): Promise<void> {
        await this.driver.elementRequest('element.dropdownSelect', this.ref, { ...options, value });
    }

    async getAttribute(selector: Selector, attribute: string): Promise<string> {
        const result = await this.driver.elementRequest<{ value: unknown }>(
            'element.getAttribute', this.ref, { selector, attributeName: attribute },
        );
        return result.value === null || result.value === undefined ? '' : String(result.value);
    }

    async innerHTML(): Promise<string> {
        const result = await this.driver.elementRequest<{ value: string }>('element.innerHTML', this.ref);
        return result.value;
    }

    async cssSelector(): Promise<string> {
        const result = await this.driver.elementRequest<{ selector: string }>('element.cssSelector', this.ref);
        return result.selector;
    }

    async tagName(): Promise<string> {
        return this.ref.tagName.toLowerCase();
    }

    async isClickable(): Promise<boolean> {
        const result = await this.driver.elementRequest<{ clickable: boolean }>('element.isClickable', this.ref);
        return result.clickable;
    }
}
