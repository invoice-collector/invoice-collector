import { AbstractBrowser } from './abstractBrowser';
import { PageWithCursor } from '../puppeteer/pageController';
import { LocalBrowser } from './localBrowser';
import { RemoteBrowser } from './remoteBrowser';
import { Proxy } from '../../proxy/abstractProxy';

export class BrowserFactory {

    /**
     * Connects to either a remote or local browser based on the specified parameters.
     * @param remoteBrowser A boolean indicating whether to connect to a remote browser (true) or a local browser (false).
     * @param locale The locale to configure the browser for.
     * @param proxy The proxy settings to use for the browser connection, or null if no proxy is used.
     * @returns An object containing the connected browser instance and the page with cursor support.
     */
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
                    page,
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
