import { AbstractBrowser } from "../puppeteer/abstractBrowser";
import { LocalBrowser } from "./localBrowser";
import { RemoteBrowser } from "./remoteBrowser";

export class BrowserFactory {
    static getBrowser(remoteChrome: boolean): AbstractBrowser {
        if (remoteChrome) {
            try {
                return new RemoteBrowser();
            }
            catch (e) {
                console.info(`Falling back to local Chrome: ${e}`);
                return new LocalBrowser();
            }
        }
        else {
            return new LocalBrowser();
        }
    }
}
