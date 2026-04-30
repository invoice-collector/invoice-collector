import { AbstractBrowser } from "./abstractBrowser";
import { PageWithCursor } from "../puppeteer/pageController";
import { LocalBrowser } from "./localBrowser";
import { RemoteBrowser } from "./remoteBrowser";

export class BrowserFactory {
    static async connect(remoteBrowser: boolean, options: any): Promise<{
        browser: AbstractBrowser,
        page: PageWithCursor
    }> {
        if (remoteBrowser) {
            try {
                const browser = new RemoteBrowser();
                const page = await browser.connect(options);
                return {
                    browser,
                    page
                };
            }
            catch (e) {
                console.info(`Falling back to local Chrome: ${e}`);
            }
        }
        const browser = new LocalBrowser();
        const page = await browser.connect(options);
        return { browser, page };
    }
}
