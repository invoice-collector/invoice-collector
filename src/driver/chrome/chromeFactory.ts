import { AbstractChrome } from "./abstractChrome";
import { LocalChrome } from "./localChrome";
import { RemoteChrome } from "./remoteChrome";

export class ChromeFactory {
    static async launch(remoteChrome: boolean, options: any): Promise<AbstractChrome> {
        let chrome;
        if (remoteChrome) {
            try {
                chrome = new RemoteChrome();
                await chrome.launch(options);
            }
            catch (e) {
                console.info(`Falling back to local Chrome: ${e}`);
                chrome = new LocalChrome();
                await chrome.launch(options);
            }
        }
        else {
            chrome = new LocalChrome();
            await chrome.launch(options);
        }
        return chrome;
    }
}
