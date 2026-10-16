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

export interface Selector {
    selector: string;
    info?: string;
}

export interface WaitOptions {
    timeout?: number;
    raiseException?: boolean;
}

export interface ActionOptions extends WaitOptions {
    delay?: number;
    navigation?: boolean;
    mouseHover?: boolean | string;
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
    constructor(public readonly code: string, message: string, public readonly data?: Params) {
        super(message);
        this.name = 'ExtensionProtocolError';
    }
}

export function isRecord(value: unknown): value is Params {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

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