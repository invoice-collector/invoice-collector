import { Frame, Page } from 'rebrowser-puppeteer-core';
import { EventEmitter } from 'events';
import { Proxy } from '../proxy/abstractProxy';
import { WebCollector } from '../collectors/webCollector';
import { Element } from './element';

export type Screenshot = {
    data: string; // Base64 encoded image data
    width: number;
    height: number;
}

export abstract class AbstractDriver extends EventEmitter {

    static DEFAULT_NAVIGATION_TIMEOUT = 30000;  // 30 seconds
    static DEFAULT_DOWNLOAD_TIMEOUT = 20000;    // 20 seconds
    static DEFAULT_TIMEOUT = 10000;             // 10 seconds
    static DEFAULT_POLLING = 1000;              // 1 second
    static DEFAULT_DELAY = 1000;                // 1 second
    static DEFAULT_DELAY_BETWEEN_RETRIES = 100; // 100 milliseconds

    static VIEWPORT_WIDTH: number = 1920;
    static VIEWPORT_HEIGHT: number = 1080;

    public static getCommonCssSelector(selector1: string, selector2: string): string {
        // Extract the common parent element from the two css selectors
        const parts1 = selector1.split(' > ');
        const parts2 = selector2.split(' > ');
        const minLength = Math.min(parts1.length, parts2.length);
        const commonParts: string[] = [];
        let i: number;
        let lastPart = '*';
        for (i = 0; i < minLength; i++) {
            if (parts1[i] === parts2[i]) {
                commonParts.push(parts1[i]);
            } else {
                const tag1 = parts1[i].split(':')[0];
                const tag2 = parts2[i].split(':')[0];
                if (tag1 === tag2) {
                    lastPart = tag1;
                }
                break;
            }
        }
        return `${commonParts.join(' > ')} > ${lastPart}`;
    }

    collector: WebCollector;
    proxy: Proxy | null;

    constructor(collector: WebCollector) {
        super();
        if (new.target === AbstractDriver) {
            throw new TypeError('Cannot construct AbstractDriver instances directly');
        }
        this.collector = collector;
        this.proxy = null;
    }

    abstract open(locale: string, proxy?: Proxy | null): Promise<void>;

    // SCREENCAST

    abstract startScreenCast(): Promise<void>;

    abstract stopScreenCast(): Promise<void>;

    abstract update(locale: string, proxy?: Proxy | null): Promise<void>;

    abstract close(): Promise<void>;

    // URL

    abstract url(): string;

    abstract origin(): string;

    abstract pages(): Promise<Page[]>;

    abstract closePage(): Promise<void>;

    abstract closeExtraPages(): Promise<void>;

    abstract goBack(): Promise<void>;

    // GOTO

    abstract goto(url: string | undefined, options?: {
        timeout?: number,
        navigation?: boolean,
    }): Promise<void>;

    /**
     * Navigates to the given URL and returns the parsed JSON from the body element.
     * @param url The URL to navigate to.
     * @returns The parsed JSON object from the body.
     */
    abstract goToJson(url: string): Promise<any>;

    abstract newPage(url: string): Promise<void>;

    // WAIT

    abstract waitForNavigation(options?: {
        timeout?: number,
    }): Promise<void>;

    // ACTIONS

    abstract getElement(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<Element | null>;

    abstract getElementCoordinates(
        x: number,
        y: number,
        context?: Page | Frame | null
    ): Promise<Element | null>;

    abstract getElements(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<Element[]>;

    abstract getAttribute(selector: any, attributeName: string, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<string>;

    abstract getAttributes(selector: any, attributeName: string, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<any>;

    abstract leftClick(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        navigation?: boolean,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    abstract inputText(selector: any, text: string, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        tries?: number,
        navigation?: boolean,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    abstract dropdownSelect(selector: any, value: string, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    abstract click(x: number, y: number, options?: {
        delay?: number,
    }): Promise<void>;

    abstract press(key: string, options?: {
        delay?: number,
    }): Promise<void>;

    abstract type(text: string, options?: {
        delay?: number,
    }): Promise<void>;

    // FILES

    abstract pdf(): Promise<string>;

    /**
     * Get all the downloaded files in the download folder as base64 and remove them.
     * @param clean If true, the files will be removed from the download folder after being read. If false, the files will not be removed. Default is true.
     * @returns An array of base64 strings representing the downloaded files.
     */
    abstract getDownloadedFiles(clean: boolean): Promise<string[]>;

    // SOURCE CODE

    abstract sourceCode(base64: boolean, includeIframes: boolean): Promise<string>;

    // SCREENSHOT

    abstract screenshot(): Promise<Screenshot>;

    abstract downloadFile(url: string): Promise<string>;

    abstract waitForFileToDownload(raiseException?: boolean): Promise<string>;

    // CAPTCHAS

    abstract waitForCloudflareTurnstile(): Promise<void>;

    abstract waitForDatadomeCaptcha(): Promise<void>;

    // COOKIES

    abstract getCookies(namesToGet: string[] | undefined): Promise<any>;

    abstract setCookies(cookies: any): Promise<void>;

    // LOCAL STORAGE

    abstract getLocalStorage(keysToGet: string[] | undefined): Promise<any>;

    abstract setLocalStorage(data: any): Promise<void>;
}
