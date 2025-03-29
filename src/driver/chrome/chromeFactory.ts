import { AbstractChrome } from "./abstractChrome";
import { LocalChrome } from "./localChrome";
import { RemoteChrome } from "./remoteChrome";

export class ChromeFactory {
    static async launch(remoteChrome: boolean, options: any): Promise<AbstractChrome> {
        let chrome;
        if (remoteChrome) {
            chrome = new RemoteChrome();
        }
        else {
            chrome = new LocalChrome();
        }
        await chrome.launch(options);
        return chrome;
    }
}
