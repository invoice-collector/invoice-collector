import { Page } from "rebrowser-puppeteer-core";
import * as utils from "../../utils";
import { AbstractBrowser } from "../puppeteer/abstractBrowser";
import path from "path";

export class RemoteBrowser extends AbstractBrowser {

    private static getDownloadPath(): string {
        AbstractBrowser.instanceCounter += 1;
        return path.join('download/remote', String(AbstractBrowser.instanceCounter));
    }

    server_port: number;

    constructor() {
        super(utils.getEnvVar("REMOTE_CHROME_IP"), RemoteBrowser.getDownloadPath());
        this.server_port = parseInt(utils.getEnvVar("REMOTE_CHROME_PORT"));
    }

    async launch(options: any): Promise<string> {
        // Define download folder
        options.prefs = options.prefs || {};
        options.prefs.download = options.prefs.download || {};
        options.prefs.download.default_directory = this.downloadPath;

        // Open remote Chrome session
        const endpoint: string = `http://${this.ip}:${this.server_port}/open`;
        let response: Response;
        try {
            response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options)
            });
        }
        catch (e) {
            throw new Error(`Failed to connect to remote Chrome ${endpoint}`, {cause: e});
        }
        const json = await response.json();
    
        // If status failed
        if (!response.ok) {
            throw new Error(`Failed to open Chrome session on remote server: ${json.error}`);
        }

        this.port = json.port;
        this.wsid = json.wsid;
        console.log(`Remote Chrome available at ${this.url}`);
        return json.downloadPath;
    }

    async close() {
        this.puppeteerBrowser.close();
        this.port = undefined;
        this.wsid = undefined;
        console.log("Remote Chrome closed");
    }
    
    async getDownloadedFiles(): Promise<string[]> {
        const endpoint: string = `http://${this.ip}:${this.server_port}/files/${this.wsid}`;
        let response: Response;
        try {
            response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch (e) {
            throw new Error(`Failed to fetch downloaded files from remote Chrome ${endpoint}`, {cause: e});
        }
        const json = await response.json();
    
        // If status failed
        if (!response.ok) {
            throw new Error(`Failed to fetch downloaded files from remote Chrome: ${json.error}`);
        }

        return json.files;
    }
}