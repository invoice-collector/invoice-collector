import { Param } from '../model/secret';
import type { AbstractDriver } from './abstractDriver';

export interface Selector {
    selector: string;
    info?: string;
}

export abstract class AbstractElement<D extends AbstractDriver<any> = AbstractDriver<any>> {
    driver: D;

    /**
     * Constructs a new instance of the AbstractElement class.
     * @param driver The driver instance associated with this element.
     */
    protected constructor(driver: D) {
        this.driver = driver;
    }
    
    /**
     * Retrieves the associated element.
     * @param selector The selector of the element to retrieve.
     * @param options.raiseException Whether to throw when the element is not found. Defaults to `true`.
     * @returns The matching element, or null if not found and exceptions are disabled.
     */
    abstract getElement(selector: Selector, options?: { raiseException?: true }): Promise<AbstractElement<D>>;
    abstract getElement(selector: Selector, options: { raiseException: false }): Promise<AbstractElement<D> | null>;

    /**
     * Retrieves the text content of the associated element.
     * @param defaultValue The value to return if the element's text content is null.
     * @returns The text content, or the default value if the text content is null.
     */
    abstract textContent(defaultValue: string): Promise<string>;

    /**
     * Left-clicks the element.
     * @param options.timeout The timeout for the click action.
     * @param options.delay The delay after the click action.
     * @param options.navigation Whether to wait for navigation after the click. Defaults to `true`.
     * @param options.mouseHover Whether to hover over the element before clicking. Can also be a selector for the element to hover over.
     */
    abstract leftClick(options?: { timeout?: number; delay?: number; navigation?: boolean; mouseHover?: boolean | string }): Promise<void>;

    /**
     * Middle-clicks the element.
     * @param options.useFallbackMethod Whether to use the fallback method. Defaults to `false`.
     * @param options.timeout The timeout for the middle-click action.
     * @param options.delay The delay after the middle-click action.
     * @param options.mouseHover Whether to hover over the element before clicking. Can also be a selector for the element to hover over.
     * @returns `true` if the fallback method was used, otherwise `false`.
     */
    abstract middleClick(options?: { useFallbackMethod?: boolean; timeout?: number; delay?: number; mouseHover?: boolean | string }): Promise<boolean>;

    /**
     * Inputs text into the element, with retries and optional navigation handling.
     * @param text The text to input.
     * @param options.tries The number of attempts to input the text. Defaults to `5`.
     * @param options.timeout The timeout for each attempt.
     * @param options.delay The delay between attempts.
     * @param options.navigation Whether to wait for navigation after inputting text. Defaults to `false`.
     * @param options.mouseHover Whether to hover over the element before inputting text.
     */
    abstract inputText(text: string | Param, options?: { tries?: number; timeout?: number; delay?: number; navigation?: boolean; mouseHover?: boolean }): Promise<void>;

    /**
     * Selects a value from a dropdown element.
     * @param value The value to select.
     * @param options.delay The delay before and after selecting the value.
     * @param options.mouseHover Whether to hover over the element before selecting the value.
     */
    abstract dropdownSelect(value: string, options?: { delay?: number; mouseHover?: boolean }): Promise<void>;

    /**
     * Gets the specified attribute from a descendant element, falling back to its property value.
     * @param selector The selector of the descendant element.
     * @param attribute The name of the attribute to retrieve.
     * @returns The attribute value, or the property value if the attribute is not present.
     */
    abstract getAttribute(selector: Selector, attribute: string): Promise<string>;

    /**
     * Gets the inner HTML content of the element.
     * @returns The inner HTML content.
     */
    abstract innerHTML(): Promise<string>;

    /**
     * Gets the CSS selector of the element.
     * @returns The CSS selector.
     */
    abstract cssSelector(): Promise<string>;

    /**
     * Gets the tag name of the element in lowercase.
     * @returns The lowercase tag name.
     */
    abstract tagName(): Promise<string>;

    /**
     * Checks if the element is clickable.
     * @returns `true` if the element is clickable, otherwise `false`.
     */
    abstract isClickable(): Promise<boolean>;
}