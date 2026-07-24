import { AbstractBrowser } from "./abstractBrowser";
import { PageWithCursor } from "../puppeteer/pageController";
import { LocalBrowser } from "./localBrowser";
import { RemoteBrowser } from "./remoteBrowser";
import { Proxy } from "../../proxy/abstractProxy";

export class BrowserFactory {
    static async connect(remoteBrowser: boolean, locale: string, proxy: Proxy | null): Promise<{
        browser: AbstractBrowser,
        page: PageWithCursor
    }> {
        if (remoteBrowser) {
            try {
                const browser = new RemoteBrowser();
                const page = await browser.connect(locale, proxy);
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
        const page = await browser.connect(locale, proxy);
        return { browser, page };
    }
}
