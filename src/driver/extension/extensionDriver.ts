import { ExtensionElement } from './extensionElement';
import { AbstractDriver, Screenshot } from '../abstractDriver';
import { ElementNotFoundError, LoggableError } from '../../error';
import { Proxy } from '../../proxy/abstractProxy';
import { WebCollector } from '../../collectors/webCollector';
import * as utils from '../../utils';
import { ExtensionTransport } from './extensionTransport';
import type { Selector } from '../abstractElement';
import { ActionOptions, ElementRef, ExtensionProtocolError, FileInfo, PageInfo, PageList, Params } from './protocol';
import { Param } from '../../model/secret';

export class ExtensionDriver extends AbstractDriver<ExtensionElement> {
    readonly transport: ExtensionTransport;
    private activePageId: string | null = null;
    private activeUrl = '';
    private pageInfo = new Map<string, PageInfo>();
    private browserOpened = false;
    private sessionOptions: Params = {};

    /**
     * Creates an extension-backed driver.
     * @param collector The web collector associated with this driver.
     * @param transport The transport used to communicate with the browser extension.
     */
    constructor(collector: WebCollector, transport: ExtensionTransport) {
        super(collector);
        this.transport = transport;
        this.transport.on('event', (event: string, data: Params) => this.onEvent(event, data));
        this.transport.on('pages', (pages: PageList) => this.setPages(pages));
    }

    /**
     * Handles browser page and screencast events received from the extension.
     * @param event The event name.
     * @param data The event payload.
     */
    private onEvent(event: string, data: Params): void {
        if (event === 'page.updated' && typeof data.pageId === 'string') {
            const previous = this.pageInfo.get(data.pageId);
            const updated = { ...previous, ...data } as PageInfo;
            this.pageInfo.set(data.pageId, updated);
            if (data.pageId === this.activePageId && typeof data.url === 'string') {
                this.activeUrl = data.url;
            }
        } else if (event === 'page.activated' && typeof data.pageId === 'string') {
            this.activePageId = data.pageId;
            this.activeUrl = this.pageInfo.get(data.pageId)?.url ?? '';
        } else if (event === 'page.created' && isRecord(data.page)) {
            const page = data.page as unknown as PageInfo;
            this.pageInfo.set(page.pageId, page);
            if (page.active) {
                this.activePageId = page.pageId;
                this.activeUrl = page.url;
            }
        } else if (event === 'page.closed' && typeof data.pageId === 'string') {
            this.pageInfo.delete(data.pageId);
            if (this.activePageId === data.pageId) {
                this.activePageId = typeof data.activePageId === 'string' ? data.activePageId : null;
                this.activeUrl = this.activePageId ? this.pageInfo.get(this.activePageId)?.url ?? '' : '';
            }
        } else if (event === 'page.error') {
            this.emit('driver_error', data);
        } else if (event === 'screencast.frame') {
            this.emit('screenshot', data.data, data.width, data.height);
        } else if (event === 'screencast.error') {
            this.emit('screencast_error', new Error(String(data.message ?? 'Screencast failed.')));
        }
    }

    /**
     * Replaces the cached page list and selects the active page.
     * @param result The page list and active page identifier received from the extension.
     */
    private setPages(result: PageList): void {
        this.pageInfo = new Map(result.pages.map(page => [page.pageId, page]));
        this.activePageId = result.activePageId;
        this.activeUrl = result.pages.find(page => page.pageId === result.activePageId)?.url ?? '';
    }

    /**
     * Adds the active page identifier to request parameters when one is available.
     * @param params The request parameters.
     * @returns The parameters with the active page identifier, when available.
     */
    private pageParams(params: Params = {}): Params {
        return this.activePageId ? { ...params, pageId: this.activePageId } : params;
    }

    /**
     * Sends a request to the extension and translates protocol errors into collector errors.
     * @param method The extension protocol method.
     * @param params The method parameters.
     * @param timeout The request timeout in milliseconds.
     * @returns The result returned by the extension.
     */
    private async request<Result>(method: string, params: Params = {}, timeout?: number): Promise<Result> {
        try {
            return await this.transport.request<Result>(method, params, timeout);
        } catch (cause) {
            if (cause instanceof ExtensionProtocolError && cause.code === 'ELEMENT_NOT_FOUND') {
                const selector = (params.selector ?? {}) as Selector;
                const error = new ElementNotFoundError(this.collector, selector, { cause: cause.message });
                await this.addDiagnostics(error);
                throw error;
            }
            if (cause instanceof ExtensionProtocolError && cause.code !== 'DISCONNECTED' && cause.code !== 'TARGET_CLOSED') {
                const error = new LoggableError(cause.message, this.collector, { cause });
                await this.addDiagnostics(error);
                throw error;
            }
            throw cause;
        }
    }

    /**
     * Attaches page diagnostics to a loggable error when the extension is connected.
     * @param error The error to enrich with diagnostics.
     */
    private async addDiagnostics(error: LoggableError): Promise<void> {
        error.url = this.activeUrl;
        if (!this.transport.connected) { return; }
        try {
            error.source_code = await this.sourceCode(true, true);
        } catch {}
        try {
            error.screenshot = await this.screenshot();
        } catch {}
    }

    /**
     * @inheritdoc
     */
    async open(locale: string, proxy: Proxy | null = null): Promise<void> {
        await this.transport.waitForConnection();
        this.proxy = proxy;
        this.sessionOptions = {
            disableCache: true,
            blockImages: this.collector.config.loadImages === false,
            blockImagesAllowUrlContains: ['cloudflare.com'],
            viewport: { width: AbstractDriver.VIEWPORT_WIDTH, height: AbstractDriver.VIEWPORT_HEIGHT },
            clearDownloads: true,
        };
        const result = await this.request<{ pages: PageInfo[]; activePageId: string | null }>('session.open', {
            locale,
            proxy: this.proxyConfig(proxy),
            options: this.sessionOptions,
        });
        if (!Array.isArray(result.pages) || !(result.activePageId === null || typeof result.activePageId === 'string')) {
            throw new ExtensionProtocolError('INTERNAL', 'Invalid session.open result.');
        }
        this.setPages(result);
        this.browserOpened = true;
    }

    /**
     * Converts a proxy definition into the extension protocol format.
     * @param proxy The proxy to convert, or null when no proxy is configured.
     * @returns The extension proxy configuration, or null.
     */
    private proxyConfig(proxy: Proxy | null): Params | null {
        if (!proxy) { return null; }
        const parsed = new URL(proxy.uri);
        const scheme = parsed.protocol.replace(':', '');
        if (!['http', 'https', 'socks4', 'socks5'].includes(scheme)) {
            throw new ExtensionProtocolError('INVALID_PARAMS', 'Unsupported proxy scheme.');
        }
        return {
            scheme,
            host: proxy.host || parsed.hostname,
            port: proxy.port || Number(parsed.port),
            ...(proxy.username || parsed.username ? { username: proxy.username || decodeURIComponent(parsed.username) } : {}),
            ...(proxy.password || parsed.password ? { password: proxy.password || decodeURIComponent(parsed.password) } : {}),
        };
    }

    /**
     * @inheritdoc
     */
    async startScreenCast(): Promise<void> {
        await this.request('screencast.start', this.pageParams(), AbstractDriver.DEFAULT_TIMEOUT);
    }

    /**
     * @inheritdoc
     */
    async stopScreenCast(): Promise<void> {
        if (this.transport.connected) {
            await this.request('screencast.stop', {}, AbstractDriver.DEFAULT_TIMEOUT);
        }
    }

    /**
     * @inheritdoc
     */
    async update(locale: string, proxy: Proxy | null = null): Promise<void> {
        const result = await this.request<{ url: string; restored: boolean }>(
            'session.update', { locale, proxy: this.proxyConfig(proxy) }, AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT,
        );
        this.proxy = proxy;
        if (this.activePageId && result.restored) {
            this.activeUrl = result.url;
        }
    }

    /**
     * @inheritdoc
     */
    async close(): Promise<void> {
        if (this.browserOpened && this.transport.connected) {
            await this.request('session.close', { closeBrowser: false }).catch(() => undefined);
            this.browserOpened = false;
        }
    }

    /**
     * @inheritdoc
     */
    url(): string {
        if (!this.activePageId) { throw new Error('Page is not initialized.'); }
        return this.activeUrl;
    }

    /**
     * @inheritdoc
     */
    origin(): string {
        if (!this.activePageId) { throw new Error('Page is not initialized.'); }
        try { return new URL(this.activeUrl).origin; } catch { return 'null'; }
    }

    /**
     * @inheritdoc
     */
    async numberOfPages(): Promise<number> {
        const result = await this.request<{ count: number }>('page.count');
        return result.count;
    }

    /**
     * @inheritdoc
     */
    async closePage(): Promise<void> {
        const result = await this.request<{ activePageId: string | null }>('page.close', this.pageParams());
        this.activePageId = result.activePageId;
        this.activeUrl = this.activePageId ? this.pageInfo.get(this.activePageId)?.url ?? '' : '';
    }

    /**
     * @inheritdoc
     */
    async closeExtraPages(): Promise<void> {
        const result = await this.request<{ activePageId: string | null }>('page.closeExtra');
        this.activePageId = result.activePageId;
        this.activeUrl = this.activePageId ? this.pageInfo.get(this.activePageId)?.url ?? '' : '';
    }

    /**
     * @inheritdoc
     */
    async goBack(): Promise<void> {
        const result = await this.request<{ url: string; timedOut: boolean }>(
            'page.goBack', this.pageParams({ timeout: AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT }), AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT,
        );
        this.activeUrl = result.url;
    }

    /**
     * @inheritdoc
     */
    async goto(url: string | undefined, options: { timeout?: number; navigation?: boolean } = {}): Promise<void> {
        if (url === undefined) { throw new Error('URL is undefined.'); }
        if (!this.activePageId) { throw new Error('Page is not initialized.'); }
        const timeout = options.timeout ?? AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT;
        const result = await this.request<{ url: string; timedOut: boolean }>('page.goto', this.pageParams({
            url,
            timeout,
            waitUntil: options.navigation === false ? 'domcontentloaded' : 'networkidle0',
        }), timeout);
        this.activeUrl = result.url;
        if (!this.activeUrl.startsWith('http')) { throw new Error(`Invalid URL: ${url}`); }
    }

    /**
     * @inheritdoc
     */
    async newPage(url: string): Promise<void> {
        if (!this.activePageId) { throw new Error('Page is not initialized.'); }
        const result = await this.request<{ pageId: string; url: string; timedOut: boolean }>('page.new', {
            url,
            timeout: AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT,
            waitUntil: 'networkidle0',
        }, AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT);
        this.activePageId = result.pageId;
        this.activeUrl = result.url;
        if (!this.activeUrl.startsWith('http')) { throw new Error(`Invalid URL: ${url}`); }
    }

    /**
     * @inheritdoc
     */
    async waitForNavigation(options: { timeout?: number } = {}): Promise<void> {
        await this.request('page.waitForNavigation', this.pageParams({ timeout: options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT }), options.timeout);
    }

    /**
     * @inheritdoc
     */
    async getElement(selector: Selector, options: { raiseException?: boolean; timeout?: number } = {}): Promise<ExtensionElement | null> {
        const result = await this.request<{ element: ElementRef | null }>('dom.getElement', this.pageParams({
            selector,
            raiseException: options.raiseException ?? true,
            timeout: options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT,
        }), options.timeout);
        return result.element ? new ExtensionElement(result.element, this) : null;
    }

    /**
     * @inheritdoc
     */
    async getElementCoordinates(x: number, y: number): Promise<ExtensionElement | null> {
        const result = await this.request<{ element: ElementRef | null }>('dom.getElementAtPoint', this.pageParams({ x, y }));
        return result.element ? new ExtensionElement(result.element, this) : null;
    }

    /**
     * @inheritdoc
     */
    async getElements(selector: Selector, options: { raiseException?: boolean; timeout?: number } = {}): Promise<ExtensionElement[]> {
        const result = await this.request<{ elements: ElementRef[] }>('dom.getElements', this.pageParams({
            selector, raiseException: options.raiseException ?? true,
            timeout: options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT, frames: 'main',
        }), options.timeout);
        return result.elements.map(ref => new ExtensionElement(ref, this));
    }

    /**
     * @inheritdoc
     */
    async getAttribute(selector: Selector, attributeName: string, options: { raiseException?: boolean; timeout?: number } = {}): Promise<string> {
        const result = await this.request<{ value: unknown }>('dom.getAttribute', this.pageParams({
            selector, attributeName, raiseException: options.raiseException ?? true,
            timeout: options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT,
        }), options.timeout);
        return result.value === null || result.value === undefined ? '' : String(result.value);
    }

    /**
     * @inheritdoc
     */
    async getAttributes(selector: Selector, attributeName: string, options: { raiseException?: boolean; timeout?: number } = {}): Promise<string[]> {
        const result = await this.request<{ values: unknown[] }>('dom.getAttributes', this.pageParams({
            selector, attributeName, raiseException: options.raiseException ?? true,
            timeout: options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT, frames: 'main',
        }), options.timeout);
        return result.values.map(value => value === null || value === undefined ? '' : String(value));
    }

    /**
     * @inheritdoc
     */
    async leftClick(selector: Selector, options: ActionOptions = {}): Promise<ExtensionElement | null> {
        const element = await this.selectorAction('action.leftClick', selector, options);
        return element;
    }

    /**
     * @inheritdoc
     */
    async inputText(selector: Selector, text: string | Param, options: ActionOptions = {}): Promise<ExtensionElement | null> {
        const rawText = typeof text === 'string' ? text : text.key;
        return this.selectorAction('action.inputText', selector, { ...options, text: rawText });
    }

    /**
     * @inheritdoc
     */
    async dropdownSelect(selector: Selector, value: string, options: ActionOptions = {}): Promise<ExtensionElement | null> {
        return this.selectorAction('action.dropdownSelect', selector, { ...options, value });
    }

    /**
     * Performs an action on the element matching a selector.
     * @param method The extension protocol method to invoke.
     * @param selector The selector of the target element.
     * @param options The action parameters.
     * @returns The matched element, or null if the extension returns no element.
     */
    private async selectorAction(method: string, selector: Selector, options: ActionOptions & { text?: string; value?: string } = {}): Promise<ExtensionElement | null> {
        const timeout = options.timeout ?? AbstractDriver.DEFAULT_TIMEOUT;
        const params: Params = {
            ...options, selector, timeout, raiseException: options.raiseException ?? true,
        };
        const result = await this.request<{ element: ElementRef | null }>(method, this.pageParams(params), timeout);
        return result.element ? new ExtensionElement(result.element, this) : null;
    }

    /**
     * @inheritdoc
     */
    async click(x: number, y: number, options: { delay?: number } = {}): Promise<void> {
        await this.request('input.click', this.pageParams({ x, y, delay: options.delay ?? AbstractDriver.DEFAULT_DELAY }));
    }

    /**
     * @inheritdoc
     */
    async press(key: string, options: { delay?: number } = {}): Promise<void> {
        await this.request('input.press', this.pageParams({ key, delay: options.delay ?? AbstractDriver.DEFAULT_DELAY }));
    }

    /**
     * @inheritdoc
     */
    async type(text: string, options: { delay?: number } = {}): Promise<void> {
        await this.request('input.type', this.pageParams({ text, delay: options.delay ?? AbstractDriver.DEFAULT_DELAY }));
    }

    /**
     * @inheritdoc
     */
    async pdf(): Promise<string> {
        const result = await this.request<{ data: string }>('page.pdf', this.pageParams({ format: 'A4', scale: 1, printBackground: true }));
        return result.data;
    }

    /**
     * @inheritdoc
     */
    async getDownloadedFiles(clean = true): Promise<string[]> {
        const result = await this.request<{ files: FileInfo[] }>('download.list', { clean, includeContent: true }, AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT);
        return result.files.map(file => file.data ?? '');
    }

    /**
     * @inheritdoc
     */
    async sourceCode(base64: boolean, includeIframes: boolean): Promise<string> {
        const result = await this.request<{ source: string; base64: boolean }>('page.sourceCode', this.pageParams({ base64, includeIframes }));
        return result.source;
    }

    /**
     * @inheritdoc
     */
    async screenshot(): Promise<Screenshot> {
        const result = await this.request<Screenshot>('page.screenshot', this.pageParams({ format: 'png' }));
        return result;
    }

    /**
     * @inheritdoc
     */
    async downloadFile(url: string): Promise<string> {
        await utils.assertPublicHttpsUrl(url);
        const result = await this.request<{ file: FileInfo }>('download.fromUrl', this.pageParams({ url, timeout: AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT }), AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT);
        if (!result.file.data) { throw new ExtensionProtocolError('INTERNAL', 'Downloaded file content is missing.'); }
        return result.file.data;
    }

    /**
     * @inheritdoc
     */
    async waitForFileToDownload(raiseException = true): Promise<string> {
        try {
            const result = await this.request<{ file: FileInfo | null }>('download.waitForFile', {
                raiseException, timeout: AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT,
            }, AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT);
            if (result.file?.data) { return result.file.data; }
        } catch (error) {
            if (raiseException) { throw error; }
        }
        const error = new LoggableError(`No file downloaded after ${AbstractDriver.DEFAULT_DOWNLOAD_TIMEOUT}ms`, this.collector);
        await this.addDiagnostics(error);
        throw error;
    }

    /**
     * @inheritdoc
     */
    async waitForCloudflareTurnstile(): Promise<void> {
        await this.request('captcha.waitForCloudflareTurnstile', this.pageParams({ timeout: AbstractDriver.DEFAULT_TIMEOUT }));
    }

    /**
     * @inheritdoc
     */
    async waitForDatadomeCaptcha(): Promise<void> {
        await this.request('captcha.waitForDatadome', this.pageParams({ timeout: 15000, polling: AbstractDriver.DEFAULT_POLLING }), 15000);
    }

    /**
     * @inheritdoc
     */
    async getCookies(namesToGet: string[] | undefined): Promise<any> {
        if (namesToGet === undefined) { return []; }
        const result = await this.request<{ cookies: unknown[] }>('cookies.get', { names: namesToGet });
        return result.cookies;
    }

    /**
     * @inheritdoc
     */
    async setCookies(cookies: any): Promise<void> {
        await this.request('cookies.set', { cookies: cookies ?? null });
    }

    /**
     * @inheritdoc
     */
    async getLocalStorage(keysToGet: string[] | undefined): Promise<any> {
        if (keysToGet === undefined) { return {}; }
        const result = await this.request<{ data: Record<string, string> }>('localStorage.get', this.pageParams({ keys: keysToGet }));
        return result.data;
    }

    /**
     * @inheritdoc
     */
    async setLocalStorage(data: any): Promise<void> {
        await this.request('localStorage.set', this.pageParams({ data: data ?? null }));
    }

    /**
     * Sends a request for an element and includes its identifier in the parameters.
     * @param method The extension protocol method.
     * @param ref The referenced element.
     * @param params Additional method parameters.
     * @returns The result returned by the extension.
     */
    async elementRequest<Result>(method: string, ref: ElementRef, params: Params = {}): Promise<Result> {
        return this.request<Result>(method, { ...params, elementId: ref.elementId });
    }
}

/**
 * Checks whether a value is a non-array object.
 * @param value The value to check.
 * @returns `true` if the value is a record, otherwise `false`.
 */
function isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}