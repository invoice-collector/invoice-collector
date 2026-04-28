import { CollectorType, CollectorCaptcha, CollectorState, Config } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { V2Collector } from "./v2Collector";
import { WebSocketServer } from "../websocket/webSocketServer";
import { AuthenticationError, DisconnectedError, LoggableError, RemoveError } from "../error";
import { MessageClick, MessageKeydown, MessageText } from "../websocket/message";
import { KeyInput } from "rebrowser-puppeteer-core";

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

export abstract class WebCollector extends V2Collector<WebConfig> {

    static LOGIN_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

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
            throw new DisconnectedError(this);
        }

        const interactiveEndPromise = new Promise<void>((resolve, reject) => {
            // Define timeout
            setTimeout(() => {
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
                        reject(new DisconnectedError(this));
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
}
