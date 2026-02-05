import { Invoice, CompleteInvoice, CollectorType, CollectorCaptcha, CollectorState, Config } from "./abstractCollector";
import { Driver, Element } from '../driver/driver';
import { AuthenticationError, CollectorError, DisconnectedError, LoggableError, NoInvoiceFoundError } from '../error';
import { ProxyFactory } from '../proxy/proxyFactory';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../model/secret";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/state";
import * as utils from '../utils';
import { V2Collector } from "./v2Collector";
import { WebSocketServer } from "../websocket/webSocketServer";
import { MessageClick, MessageKeydown, MessageText } from "../websocket/message";
import { KeyInput } from "rebrowser-puppeteer-core";
import { GoogleOauth2 } from "./oauth2/googleOauth2";
import { MicrosoftOauth2 } from "./oauth2/microsoftOauth2";
import { CollectorMemory } from "../model/collectorMemory";

export type WebConfig = Config & {
    loginUrl: string,
    entryUrl?: string,
    useProxy?: boolean,
    captcha: CollectorCaptcha,
    loadImages?: boolean,
    autoLogin?: {
        cookieNames?: string[],
        localStorageKeys?: string[]
    },
    enableInteractiveLogin: boolean
}

export enum DocumentStrategy {
    SPLIT = "split",
    MERGE = "merge"
}

export abstract class WebCollector extends V2Collector<WebConfig> {

    static LOGIN_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes
    static DEFAULT_DOCUMENT_STRATEGY = DocumentStrategy.SPLIT;

    driver: Driver | null;

    constructor(config: WebConfig) {
        super({
            ...config,
            type: config.type || CollectorType.WEB,
            useProxy: config.useProxy === undefined ? config.captcha !== CollectorCaptcha.NONE : config.useProxy,
            state: config.state || CollectorState.ACTIVE,
            loadImages: config.loadImages === undefined ? config.captcha == CollectorCaptcha.CLOUDFLARE : config.loadImages,
            autoLogin: config.autoLogin || {
                cookieNames: [],                // Take all cookies by default
                localStorageKeys: undefined     // Take no localStorage by default
            }
        });
        this.driver = null;
    }

    async _collect(
        state: State,
        twofa_promise: TwofaPromise,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null,
        useInteractiveLogin: boolean
    ): Promise<CompleteInvoice[]> {
        // Get proxy
        const proxy = this.config.useProxy ? await ProxyFactory.getProxy().get(location) : null;

        // Start browser and page
        const driver = new Driver(this);
        this.driver = driver;
        await driver.open(proxy);

        // Set cookies
        await driver.setCookies(await secret.getCookies());

        // Set localStorage
        await driver.setLocalStorage(await secret.getLocalStorage());

        try {
            // Pre actions
            await this.pre(driver);

            // If web socket server exists, enable images
            let loadImagesPreviousValue = this.config.loadImages;
            if(webSocketServer) {
                this.config.loadImages = true;
            }

            // If no interactive login
            if(!useInteractiveLogin) {
                // Open entry url
                await driver.goto(this.config.entryUrl || this.config.loginUrl);

                // Check if user needs to login
                const needLogin = await this.needLogin(driver)

                // If user need to login
                if (needLogin) {
                    // Set progress step to logging in
                    state.update(State._2_LOGGING_IN);
                    webSocketServer?.sendState(State._2_LOGGING_IN);

                    console.log("User is not logged in, logging in...")

                    // Login with stored credentials
                    const login_error = await this.login(driver, await secret.getParams(), webSocketServer) || 
                        await GoogleOauth2.login(driver, await secret.getParams(), webSocketServer) || 
                        await MicrosoftOauth2.login(driver, await secret.getParams(), webSocketServer);

                    // Check if not authenticated
                    if (login_error) {
                        throw new AuthenticationError(login_error, this);
                    }
                }
                else {
                    console.log("Successfully used cookies and local storage")
                }

                // Check if 2fa is required
                const needTwofa = await this.needTwofa(driver) ||
                    await GoogleOauth2.needTwofa(driver) ||
                    await MicrosoftOauth2.needTwofa(driver);

                // If 2fa is required
                if (needTwofa) {
                    console.log(`2FA is required, performing 2FA... (${utils.trim(needTwofa)})`)

                    // If the webSocketServer is undefined, it means that the session has expired
                    if (!webSocketServer) {
                        throw new DisconnectedError(this);
                    }

                    // Set progress step to 2fa waiting
                    state.update(State._3_2FA_WAITING, needTwofa);
                    webSocketServer.sendState(State._3_2FA_WAITING, needTwofa);

                    // Set instructions for UI
                    await twofa_promise.setInstructions(needTwofa);

                    const twofa_error = await this.twofa(driver, await secret.getParams(), twofa_promise, webSocketServer) ||
                        await GoogleOauth2.twofa(driver, await secret.getParams(), twofa_promise, webSocketServer) || 
                        await MicrosoftOauth2.twofa(driver, await secret.getParams(), twofa_promise, webSocketServer);

                    // Check if 2fa error
                    if (twofa_error) {
                        throw new AuthenticationError(twofa_error, this);
                    }
                }

                console.log("User is successfully logged in")

                // Set progress step to collecting
                state.update(State._5_COLLECTING);
                webSocketServer?.sendState(State._5_COLLECTING);
            }
            else {
                // Get collector memory
                const collectorMemory = await CollectorMemory.fromCollectorId(this.config.id);

                // If first collect
                if(webSocketServer) {
                    // Go to login url
                    await driver.goto(this.config.loginUrl, { navigation: false });
                    // Perform interactive login
                    await this.interactive(driver, webSocketServer, 'i18n.views.interactive.login.instructions');
                    // Save customer area url if not defined
                    if(!collectorMemory.customerAreaUrl) {
                        collectorMemory.customerAreaUrl = driver.url();
                        await collectorMemory.commit();
                    }

                    // If no entry url defined
                    if(!this.config.entryUrl && !collectorMemory.entryUrl) {
                        // Perform interactive navigate
                        await this.interactive(driver, webSocketServer, 'i18n.views.interactive.navigate.instructions');
                        // Save entry url
                        collectorMemory.entryUrl = driver.url();
                        await collectorMemory.commit();
                    }
                    else if (this.config.entryUrl && !collectorMemory.entryUrl) {
                        collectorMemory.entryUrl = this.config.entryUrl;
                        await collectorMemory.commit();
                    }
                    else if (!this.config.entryUrl && collectorMemory.entryUrl) {
                        console.warn(`Collector ${this.config.id} has no entryUrl defined in config, but has one saved in memory. Consider defining it in the config.`);
                    }
                }

                // Compute new url
                const url = this.config.entryUrl || collectorMemory.entryUrl || collectorMemory.customerAreaUrl;

                // If url is undefined, something whent wrong
                if(!url) {
                    throw new Error(`Collector ${this.config.id} does not have any of entryUrl, nor customerAreaUrl defined`);
                }

                // Set progress step to collecting
                state.update(State._5_COLLECTING);
                webSocketServer?.sendState(State._5_COLLECTING);

                // Go to entry url
                await driver.goto(url);

                // Check if user needs to login
                const needLogin = await this.needLogin(driver);

                // If need login, raise error
                if(needLogin) {
                    throw new DisconnectedError(this);
                }
            }

            // Update secret.cookies
            await secret.setCookies(await driver.getCookies(this.config.autoLogin?.cookieNames));
            // Update secret.localStorage
            await secret.setLocalStorage(await driver.getLocalStorage(this.config.autoLogin?.localStorageKeys));

            // Restore previous load images value
            if(webSocketServer) {
                this.config.loadImages = loadImagesPreviousValue;
            }

            // Navigate to invoices
            await this.navigate(driver);

            // Get previous invoice ids
            const previousInvoiceIds = previousInvoices.map((inv) => inv.id);

            // For each page
            let invoices: CompleteInvoice[] = [];
            let firstDownload = true;
            await this.forEachPage(driver, async () => {
                // Check if no invoices are present on the page
                const isEmpty = await this.isEmpty(driver);

                // Continue only if invoices are present
                if (!isEmpty) {
                    // For each invoice on the page
                    const invoiceElements = await this.getInvoices(driver);
                    
                    // If invoice elements is empty, collector may be broken
                    if (invoiceElements.length === 0) {
                        throw new NoInvoiceFoundError(this);
                    }

                    // For each invoice element
                    for (const element of invoiceElements) {
                        // Get invoice data
                        let invoice: Invoice | null = await this.data(driver, element);

                        // Ignore if null
                        if (invoice === null) {
                            continue;
                        }

                        // Sanitize invoice
                        invoice = {
                            id: invoice.id.trim().replace(/[/\\?%*:|"<>]/g, '-'),
                            timestamp: invoice.timestamp,
                            amount: invoice.amount?.trim(),
                            link: invoice.link?.trim(),
                            metadata: invoice.metadata || {},
                            downloadButton: invoice.downloadButton || {}
                        }

                        // If id is not in previous ids
                        if (!previousInvoiceIds.includes(invoice.id)) {
                            // If invoice is more recent than the download_from_timestamp
                            if (download_from_timestamp <= invoice.timestamp) {
                                // If this is the first invoice to download, set progress step to downloading
                                if (firstDownload) {
                                    // Set progress step to downloading
                                    state.update(State._6_DOWNLOADING);
                                    webSocketServer?.sendState(State._6_DOWNLOADING);
                                    firstDownload = false;
                                }

                                // Download invoice
                                let documents = await this.download(driver, invoice);

                                // Close extra pages opened during download
                                await driver.closeExtraPages();

                                // If one document downloaded
                                if (WebCollector.DEFAULT_DOCUMENT_STRATEGY == DocumentStrategy.MERGE && documents.length > 1) {
                                    documents = [await utils.mergePdfDocuments(documents)];
                                }
                                console.log(`Invoice ${invoice.id} successfully downloaded, ${documents.length} document(s) found.`);
                    
                                for (const document of documents) {
                                    invoices.push({
                                        ...invoice,
                                        data: document,
                                        mimetype: utils.mimetypeFromBase64(document),
                                        hash: utils.hash_string(document, "md5"),
                                        collected_timestamp: Date.now(),
                                        metadata: invoice.metadata || {}
                                    });
                                }
                            }
                            else {
                                // Add invoice without downloading it
                                invoices.push({
                                    ...invoice,
                                    data: null,
                                    mimetype: null,
                                    hash: null,
                                    collected_timestamp: null,
                                    downloadButton: null,
                                    metadata: {},
                                });
                            }
                        }
                    }
                }
            });

            return invoices;
        } catch (error) {
            if (error instanceof LoggableError) {
                if (!error.url) error.url = driver.url();
                if (!error.source_code) error.source_code = await driver.sourceCode(true, true);
                if (!error.screenshot) error.screenshot = await driver.screenshot();
            }
            if (error instanceof CollectorError) {
                throw error;
            }

            // For unexpected error happening during the collection, log the error
            let loggableError = new LoggableError(
                "An error occured while collecting invoice from web",
                this,
                { cause: error }
            );
            loggableError.url = driver.url();
            loggableError.source_code = await driver.sourceCode(true, true);
            loggableError.screenshot = await driver.screenshot();
            throw loggableError;
        }
    }

    async _close(): Promise<void> {
        if (this.driver != null) {
            // Close the browser
            await this.driver.close();
        }
    }

    private async interactive(
        driver: Driver,
        webSocketServer: WebSocketServer | undefined,
        instructions: string
    ): Promise<string |void> {
        // If called with a WebSocketServer to undefined, it means that the session has expired
        if (!webSocketServer) {
            throw new DisconnectedError(this);
        }

        const interactiveEndPromise = new Promise<void>((resolve, reject) => {
            // Define timeout
            setTimeout(() => {
                //webSocketServer.close();
                reject(new AuthenticationError('i18n.collectors.all.login.timeout', this))
            }, WebCollector.LOGIN_TIMEOUT_MS)


            // Define what to do on click event
            webSocketServer.onClick = async (event: MessageClick) => {
                await driver.page?.mouse.click(event.x, event.y);
            };
            // Define what to do on keydown event
            webSocketServer.onKeydown = async (event: MessageKeydown) => {
                // If key is a single character, type it, else press the key
                if (event.key.length === 1){
                    await driver.page?.keyboard.type(event.key);
                }
                else {
                    await driver.page?.keyboard.press(event.key as KeyInput);
                }
            };
            // Define what to do on text event
            webSocketServer.onText = async (event: MessageText) => {
                await driver.page?.keyboard.type(event.text);
            };
            // Define what to do on interactive event
            webSocketServer.onInteractive = async (event) => {
                switch(event.reason) {
                    case 'open':
                        // Do not do anything
                        break;
                    case 'close':
                        resolve();
                        break;
                    case 'cancel':
                        reject(new AuthenticationError("i18n.collectors.all.login.cancel", this));
                        break;
                    case 'report':
                        reject(new LoggableError("A user reported an issue on this collector", this));
                        break;
                    default:
                        console.error('Unknown close reason:', event.reason);
                        break;
                }
            };
            // Send interactive open
            webSocketServer.sendInteractiveOpen(instructions);
        });

        // ---------- Screencast ----------

        // Create CDP session
        const cdp = await driver.page?.createCDPSession();
        if(!cdp) {
            throw new Error("CDP session could not be created");
        }
        await cdp.send('Page.enable');

        // Listen for screencast frames
        cdp.on('Page.screencastFrame', async ({ data, sessionId }) => {
            // Send screenshot to client
            webSocketServer?.sendScreenshot(data, Driver.VIEWPORT_WIDTH, Driver.VIEWPORT_HEIGHT);
            // Acknowledge frame
            await cdp.send('Page.screencastFrameAck', { sessionId });
        });

        // Start screencast
        await cdp.send('Page.startScreencast', {
            format: 'jpeg',         // jpeg = smaller than png
            quality: 100,           // 0–100
            maxWidth: Driver.VIEWPORT_WIDTH,
            maxHeight: Driver.VIEWPORT_HEIGHT,
            everyNthFrame: 1        // increase to reduce FPS
        });

        try {
            await interactiveEndPromise;
        } finally {
            await cdp.send('Page.stopScreencast');
        }
    }

    //NOT IMPLEMENTED
    async pre(driver: Driver): Promise<void> {
        // Assume the collector does not need pre actions
    }

    async needLogin(driver: Driver): Promise<boolean>{
        // User is not logged in if:
        // - entryUrl is not defined = always need go through login process
        // - current URL does not contain entryUrl
        return this.config.entryUrl == undefined || !driver.url().includes(this.config.entryUrl);
    }

    abstract login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string |void>;

    async needTwofa(driver: Driver): Promise<string | void>{
        // Assume the collector does not implement 2FA
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Assume the collector does not implement 2FA
    }

    async navigate(driver: Driver): Promise<void> {
        // Assume the collector does not need navigation
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        // Assume invoices are present
        return false;
    }

    async forEachPage(driver: Driver, next: () => void): Promise<void> {
        // Assume the collector does not have pagination
        await next();
    }

    abstract getInvoices(driver: Driver): Promise<Element[]>;

    abstract data(driver: Driver, element: Element): Promise<Invoice | null>;

    abstract download(driver: Driver, invoice: Invoice): Promise<string[]>;

    // DOWNLOAD METHODS

    async download_link(driver: Driver, link: string): Promise<string> {
        return await driver.downloadFile(link);
    }

    async download_webpage(driver: Driver, link: string): Promise<string> {
        // Get current value
        const loadImagesPreviousValue = driver.collector.config.loadImages;
        // Allow loading images so that the invoice is fully rendered
        driver.collector.config.loadImages = true;
        // Go to webpage
        await driver.goto(link);
        // Download as PDF
        const data = await driver.pdf();
        // Restore previous value
        driver.collector.config.loadImages = loadImagesPreviousValue;
        return data;
    }

    async download_from_file(driver: Driver): Promise<string> {
        return await driver.waitForFileToDownload(false);
    }
}
