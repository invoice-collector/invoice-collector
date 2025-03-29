import { LaunchedChrome } from "chrome-launcher";
import { AbstractChrome } from "./abstractChrome";

export class LocalChrome extends AbstractChrome {

    static LOCAL_IP: string = "127.0.0.1";

    chrome: LaunchedChrome|undefined;

    constructor() {
        super(LocalChrome.LOCAL_IP);
    }

    async launch(options: any) {
        const dynamicImport = new Function('specifier', 'return import(specifier)');
        const { launch } = await dynamicImport('chrome-launcher');
        this.chrome = await launch(options) as LaunchedChrome;
        this.port = this.chrome.port;
        console.log(`Local Chrome available at ${this.url}`);
    }

    async close() {
        if (this.chrome) {
            await this.chrome.kill();
            this.chrome = undefined;
            this.port = undefined;
            console.log("Local Chrome closed");
        }
        else {
            console.log("Local Chrome is not running");
        }
    }
}