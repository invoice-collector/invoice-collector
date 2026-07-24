import { CollectorType, CollectorCaptcha, CollectorState, Config, CollectorAuthenticationMethod } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { V2Collector } from "./v2Collector";
import { WebSocketServer } from "../websocket/webSocketServer";
import { AuthenticationError, DisconnectedError, LoggableError, RemoveError } from "../error";
import { MessageClick, MessageKeydown, MessageText } from "../websocket/message";
import { KeyInput } from "rebrowser-puppeteer-core";

export type WebConfig = Config & {
    loginUrl: string,
    entryUrl?: string,
    useProxyForLogin?: boolean,
    useProxy?: boolean,
    remoteBrowser?: boolean,
    captcha: CollectorCaptcha,
    loadImages?: boolean,
    autoLogin?: {
        cookieNames?: string[],
        localStorageKeys?: string[]
    },
    authenticationMethod?: CollectorAuthenticationMethod
}

export abstract class WebCollector extends V2Collector<WebConfig> {

    static LOGIN_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

    driver: Driver | null;

    constructor(config: WebConfig) {
        super({
            ...config,
            type: config.type || CollectorType.WEB,
            useProxyForLogin: config.useProxy === undefined ? config.captcha !== CollectorCaptcha.NONE : config.useProxy,
            useProxy: config.useProxy === undefined ? config.captcha == CollectorCaptcha.DATADOME : config.useProxy,
            remoteBrowser: config.remoteBrowser === undefined ? config.captcha == CollectorCaptcha.DATADOME : config.remoteBrowser,
            state: config.state || CollectorState.ACTIVE,
            loadImages: config.loadImages === undefined ? false : config.loadImages,
            autoLogin: config.autoLogin || {
                cookieNames: [],                // Take all cookies by default
                localStorageKeys: undefined     // Take no localStorage by default
            },
            authenticationMethod: config.authenticationMethod || CollectorAuthenticationMethod.ALL
        });
        this.driver = null;
    }

    async _close(): Promise<void> {
        if (this.driver != null) {
            // Close the browser
            await this.driver.close();
        }
    }

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

    protected async interactive(
        driver: Driver,
        webSocketServer: WebSocketServer | undefined,
        instructions: string
    ): Promise<string |void> {
        // If called with a WebSocketServer to undefined, it means that the session has expired
        if (!webSocketServer) {
            throw new DisconnectedError('i18n.collectors.all.login.expired', this);
        }

        const interactiveEndPromise = new Promise<void>((resolve, reject) => {
            // Define timeout
            setTimeout(() => {
                reject(new AuthenticationError('i18n.collectors.all.login.timeout', this))
            }, WebCollector.LOGIN_TIMEOUT_MS)


            // Define what to do on click event
            webSocketServer.onClick = async (event: MessageClick) => {
                try {
                    await driver.page?.mouse.click(event.x, event.y);
                } catch (err) {
                    // The page may have been closed/navigated while dispatching the input.
                    // Reject the promise to avoid crashing the process with an unhandled rejection.
                    reject(new DisconnectedError('i18n.collectors.all.login.expired', this));
                }
            };
            // Define what to do on keydown event
            webSocketServer.onKeydown = async (event: MessageKeydown) => {
                try {
                    // If key is a single character, type it, else press the key
                    if (event.key.length === 1){
                        await driver.page?.keyboard.type(event.key);
                    }
                    else {
                        await driver.page?.keyboard.press(event.key as KeyInput);
                    }
                } catch (err) {
                    // The page may have been closed/navigated while dispatching the input.
                    // Reject the promise to avoid crashing the process with an unhandled rejection.
                    reject(new DisconnectedError('i18n.collectors.all.login.expired', this));
                }
            };
            // Define what to do on text event
            webSocketServer.onText = async (event: MessageText) => {
                try {
                    await driver.page?.keyboard.type(event.text);
                } catch (err) {
                    // The page may have been closed/navigated while dispatching the input.
                    // Reject the promise to avoid crashing the process with an unhandled rejection.
                    reject(new DisconnectedError('i18n.collectors.all.login.expired', this));
                }
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
                        reject(new DisconnectedError('i18n.collectors.all.login.expired', this));
                        break;
                    case 'remove':
                        reject(new RemoveError(this));
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

        // Forward each screencast frame emitted by the driver to the client
        const onScreenshot = (data: string, width: number, height: number) => {
            webSocketServer.sendScreenshot(data, width, height);
        };
        driver.on('screenshot', onScreenshot);

        // Start the screencast (the driver keeps it attached to the active page)
        await driver.startScreenCast();

        try {
            await interactiveEndPromise;
        } finally {
            driver.off('screenshot', onScreenshot);
            await driver.stopScreenCast();
        }
    }
}
