import { CollectorType, CollectorCaptcha, CollectorState, Config } from "./abstractCollector";
import { Driver } from '../driver/driver';
import { V2Collector } from "./v2Collector";

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
}
