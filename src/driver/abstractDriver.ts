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

    /**
     * Finds the closest common ancestor path between two CSS selectors.
     * @param selector1 The first CSS selector.
     * @param selector2 The second CSS selector.
     * @returns A CSS selector representing the common parent path, ending in the last common tag or '*' if it differs.
     */
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

    /**
     * Opens a new browser session and navigates to a blank page.
     * @param locale The locale to use for the browser session.
     * @param proxy An optional proxy to route the browser traffic through.
     */
    abstract open(locale: string, proxy?: Proxy | null): Promise<void>;

    // SCREENCAST

    /**
     * Starts streaming screenshots of the current page, emitting 'screenshot' events as frames arrive.
     */
    abstract startScreenCast(): Promise<void>;

    /**
     * Stops the currently running screencast, if any.
     */
    abstract stopScreenCast(): Promise<void>;

    /**
     * Restarts the driver with a new locale and/or proxy, restoring the current URL, cookies and local storage.
     * @param locale The locale to use for the new browser session.
     * @param proxy An optional proxy to route the browser traffic through.
     */
    abstract update(locale: string, proxy?: Proxy | null): Promise<void>;

    /**
     * Closes the underlying browser session.
     */
    abstract close(): Promise<void>;

    // URL

    /**
     * Returns the URL of the current page.
     */
    abstract url(): string;

    /**
     * Returns the origin (scheme, host and port) of the current page's URL.
     */
    abstract origin(): string;

    /**
     * Returns the number of open pages/tabs in the browser.
     */
    abstract numberOfPages(): Promise<number>;

    /**
     * Closes the current page.
     */
    abstract closePage(): Promise<void>;

    /**
     * Closes every open page except the first one.
     */
    abstract closeExtraPages(): Promise<void>;

    /**
     * Navigates back to the previous page in the browser history.
     */
    abstract goBack(): Promise<void>;

    // GOTO

    /**
     * Navigates the current page to the given URL.
     * @param url The URL to navigate to.
     * @param options.timeout Maximum time to wait for navigation, in milliseconds.
     * @param options.navigation If true, waits for the network to be idle; otherwise waits only for the DOM to be loaded.
     */
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

    /**
     * Opens a new page/tab and navigates it to the given URL.
     * @param url The URL to navigate to.
     */
    abstract newPage(url: string): Promise<void>;

    // WAIT

    /**
     * Waits for an ongoing navigation on the current page to finish. Resolves silently on timeout.
     * @param options.timeout Maximum time to wait, in milliseconds.
     */
    abstract waitForNavigation(options?: {
        timeout?: number,
    }): Promise<void>;

    // ACTIONS

    /**
     * Waits for and returns the first element matching the selector, searching across all frames.
     * @param selector The selector describing the element to find.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the element, in milliseconds.
     * @returns The matching element, or null if not found and exceptions are disabled.
     */
    abstract getElement(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<Element | null>;

    /**
     * Returns the deepest element (descending through nested iframes and shadow roots) located at the given page coordinates.
     * @param x The horizontal coordinate on the page.
     * @param y The vertical coordinate on the page.
     * @returns The element found at the coordinates, or null if none.
     */
    abstract getElementCoordinates(
        x: number,
        y: number
    ): Promise<Element | null>;

    /**
     * Waits for and returns all elements matching the selector.
     * @param selector The selector describing the elements to find.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the first element, in milliseconds.
     * @returns An array of matching elements, which may be empty if none are found and exceptions are disabled.
     */
    abstract getElements(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<Element[]>;

    /**
     * Waits for the first element matching the selector and returns the value of the given attribute (or property fallback).
     * @param selector The selector describing the element to find.
     * @param attributeName The name of the attribute to read.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the element, in milliseconds.
     * @returns The attribute value, or empty string if not found and exceptions are disabled.
     */
    abstract getAttribute(selector: any, attributeName: string, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<string>;

    /**
     * Waits for the elements matching the selector and returns the given attribute (or property fallback) for each of them.
     * @param selector The selector describing the elements to find.
     * @param attributeName The name of the attribute to read.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the first element, in milliseconds.
     * @returns An array of attribute values, which may be empty if none are found and exceptions are disabled.
     */
    abstract getAttributes(selector: any, attributeName: string, options?: {
        raiseException?: boolean,
        timeout?: number,
    }): Promise<string[]>;

    /**
     * Waits for the element matching the selector and performs a left click on it.
     * @param selector The selector describing the element to click.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the element, in milliseconds.
     * @param options.delay Delay applied around the click, in milliseconds.
     * @param options.navigation If true, waits for a navigation to complete after clicking.
     * @param options.mouseHover If true, hovers the mouse over the element before clicking.
     * @returns The clicked element, or null if not found and exceptions are disabled.
     */
    abstract leftClick(selector: any, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        navigation?: boolean,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    /**
     * Waits for the element matching the selector and types the given text into it.
     * @param selector The selector describing the element to type into.
     * @param text The text to input.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the element, in milliseconds.
     * @param options.delay Delay applied around typing, in milliseconds.
     * @param options.tries Number of attempts to input the text before giving up.
     * @param options.navigation If true, waits for a navigation to complete after typing.
     * @param options.mouseHover If true, hovers the mouse over the element before typing.
     * @returns The element that received the text, or null if not found and exceptions are disabled.
     */
    abstract inputText(selector: any, text: string, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        tries?: number,
        navigation?: boolean,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    /**
     * Waits for the element matching the selector and selects the given value in it.
     * @param selector The selector describing the dropdown element.
     * @param value The value to select.
     * @param options.raiseException If true, throws when no matching element is found within the timeout.
     * @param options.timeout Maximum time to wait for the element, in milliseconds.
     * @param options.delay Delay applied around the selection, in milliseconds.
     * @param options.mouseHover If true, hovers the mouse over the element before selecting.
     * @returns The dropdown element, or null if not found and exceptions are disabled.
     */
    abstract dropdownSelect(selector: any, value: string, options?: {
        raiseException?: boolean,
        timeout?: number,
        delay?: number,
        mouseHover?: boolean,
    }): Promise<Element | null>;

    /**
     * Clicks the mouse at the given page coordinates.
     * @param x The horizontal coordinate to click at.
     * @param y The vertical coordinate to click at.
     * @param options.delay Delay applied after the click, in milliseconds.
     */
    abstract click(x: number, y: number, options?: {
        delay?: number,
    }): Promise<void>;

    /**
     * Presses a single keyboard key.
     * @param key The key to press.
     * @param options.delay Delay applied after the key press, in milliseconds.
     */
    abstract press(key: string, options?: {
        delay?: number,
    }): Promise<void>;

    /**
     * Types the given text using the keyboard, character by character.
     * @param text The text to type.
     * @param options.delay Delay applied after typing, in milliseconds.
     */
    abstract type(text: string, options?: {
        delay?: number,
    }): Promise<void>;

    // FILES

    /**
     * Generates a PDF of the current page.
     * @returns The PDF content encoded as a base64 string.
     */
    abstract pdf(): Promise<string>;

    /**
     * Gets all the downloaded files in the download folder as base64 and optionally removes them.
     * @param clean If true, the files will be removed from the download folder after being read. If false, the files will not be removed. Default is true.
     * @returns An array of base64 strings representing the downloaded files.
     */
    abstract getDownloadedFiles(clean: boolean): Promise<string[]>;

    // SOURCE CODE

    /**
     * Returns the HTML source code of the current page, stripped of scripts, styles, svgs and heads.
     * @param base64 If true, encodes the returned source code as a base64 string.
     * @param includeIframes If true, includes the source code of nested iframes, separated by a marker comment.
     * @returns The HTML source code of the current page, optionally encoded as a base64 string.
     */
    abstract sourceCode(base64: boolean, includeIframes: boolean): Promise<string>;

    // SCREENSHOT

    /**
     * Takes a screenshot of the current page.
     * @returns The screenshot data (base64 encoded) along with its width and height.
     */
    abstract screenshot(): Promise<Screenshot>;

    /**
     * Navigates to the given URL to trigger a file download and waits for it to complete.
     * @param url The URL that triggers the download.
     * @returns The downloaded file content encoded as a base64 string.
     */
    abstract downloadFile(url: string): Promise<string>;

    /**
     * Waits until a file appears in the download folder.
     * @param raiseException If true, throws when no file is downloaded within the timeout.
     * @returns The downloaded file content encoded as a base64 string.
     */
    abstract waitForFileToDownload(raiseException?: boolean): Promise<string>;

    // CAPTCHAS

    /**
     * Waits for a Cloudflare Turnstile challenge on the current page to be resolved.
     */
    abstract waitForCloudflareTurnstile(): Promise<void>;

    /**
     * Waits for a DataDome captcha challenge on the current page to succeed.
     */
    abstract waitForDatadomeCaptcha(): Promise<void>;

    // COOKIES

    /**
     * Returns the browser cookies, optionally filtered by name.
     * @param namesToGet Names (or partial names) to filter cookies by. If undefined, returns an empty array; if empty, returns all cookies.
     * @returns The matching cookies.
     */
    abstract getCookies(namesToGet: string[] | undefined): Promise<any>;

    /**
     * Sets the given cookies in the browser.
     * @param cookies The cookies to set.
     */
    abstract setCookies(cookies: any): Promise<void>;

    // LOCAL STORAGE

    /**
     * Returns the current page's local storage entries, optionally filtered by key.
     * @param keysToGet Keys (or partial keys) to filter entries by. If undefined, returns an empty object; if empty, returns all entries.
     * @returns The matching local storage entries.
     */
    abstract getLocalStorage(keysToGet: string[] | undefined): Promise<any>;

    /**
     * Sets the given entries in the current page's local storage.
     * @param data The key/value pairs to store.
     */
    abstract setLocalStorage(data: any): Promise<void>;
}
