export type Params = Record<string, unknown>;

export interface PageInfo {
    pageId: string;
    url: string;
    title: string;
    active: boolean;
    index: number;
}

export interface PageList {
    pages: PageInfo[];
    activePageId: string | null;
}

export interface ElementRef {
    elementId: string;
    frameId: string;
    tagName: string;
}

export interface WaitOptions {
    timeout?: number;
    raiseException?: boolean;
}

export interface ActionOptions extends WaitOptions {
    delay?: number;
    navigation?: boolean;
    mouseHover?: boolean | string;
    download?: boolean;
    tries?: number;
}

export interface FileInfo {
    name: string;
    size: number;
    mimeType?: string;
    data?: string;
    transfer?: string;
}

export class ExtensionProtocolError extends Error {
    /**
     * Constructs an error received from or raised by the extension protocol.
     * @param code Protocol error code.
     * @param message Human-readable error message.
     * @param data Optional structured error details.
     */
    constructor(public readonly code: string, message: string, public readonly data?: Params) {
        super(message);
        this.name = 'ExtensionProtocolError';
    }
}

/**
 * Checks whether a value is a non-null, non-array object.
 * @param value Value to inspect.
 * @returns True when the value is a record of protocol parameters.
 */
export function isRecord(value: unknown): value is Params {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Validates the shape of a page-list response from the extension.
 * @param value Value to validate.
 * @returns True when the value contains valid pages and a matching active page ID.
 */
export function isPageList(value: unknown): value is PageList {
    return isRecord(value) && Array.isArray(value.pages) && value.pages.every(page =>
        isRecord(page) && typeof page.pageId === 'string' && typeof page.url === 'string' &&
        typeof page.title === 'string' && typeof page.active === 'boolean' &&
        Number.isInteger(page.index)
    ) && (value.activePageId === null || (typeof value.activePageId === 'string' &&
        value.pages.some(page => page.pageId === value.activePageId)));
}

export const PARALLEL_METHODS = new Set([
    'page.url', 'page.origin', 'page.count', 'page.list', 'page.screenshot',
    'page.sourceCode', 'screencast.start', 'screencast.stop',
]);