import type { AbstractDriver } from './abstractDriver';

export interface Selector {
    selector: string;
    info?: string;
}

export abstract class AbstractElement<D extends AbstractDriver<any> = AbstractDriver<any>> {
    driver: D;

    protected constructor(driver: D) {
        this.driver = driver;
    }
    
    abstract getElement(selector: Selector, options?: { raiseException?: true }): Promise<AbstractElement<D>>;
    abstract getElement(selector: Selector, options: { raiseException: false }): Promise<AbstractElement<D> | null>;
    abstract textContent(defaultValue: string): Promise<string>;
    abstract leftClick(options?: { timeout?: number; delay?: number; navigation?: boolean; mouseHover?: boolean | string }): Promise<void>;
    abstract middleClick(options?: { useFallbackMethod?: boolean; timeout?: number; delay?: number; mouseHover?: boolean | string }): Promise<boolean>;
    abstract inputText(text: string, options?: { tries?: number; timeout?: number; delay?: number; navigation?: boolean; mouseHover?: boolean }): Promise<void>;
    abstract dropdownSelect(value: string, options?: { delay?: number; mouseHover?: boolean }): Promise<void>;
    abstract getAttribute(selector: Selector, attribute: string): Promise<string>;
    abstract innerHTML(): Promise<string>;
    abstract cssSelector(): Promise<string>;
    abstract tagName(): Promise<string>;
    abstract isClickable(): Promise<boolean>;
}