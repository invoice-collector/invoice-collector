import path from 'path';
import fs from 'fs';
import { LaunchedChrome } from "chrome-launcher";
import { AbstractBrowser } from "../puppeteer/abstractBrowser";

export class LocalBrowser extends AbstractBrowser {

    static LOCAL_IP: string = "127.0.0.1";

    chrome: LaunchedChrome|undefined;

    constructor() {
        super(LocalBrowser.LOCAL_IP);
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

    async getDownloadedFiles(): Promise<string[]> {
        // Get the files in the download folder
        const files = fs.readdirSync(this.downloadPath)
            .filter(file => !file.endsWith('.crdownload'))
            .map(file => {
                return {
                    name: file,
                    base64: fs.readFileSync(path.join(this.downloadPath, file), {encoding: 'base64'})
                };
            });

        // Clean the files from the download folder
        for (const file of files) {
            fs.unlinkSync(path.join(this.downloadPath, file.name));
        }

        // Return the files as base64
        return files.map(file => file.base64);
    }
}