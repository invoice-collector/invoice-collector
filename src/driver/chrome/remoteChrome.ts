import { AbstractChrome } from "./abstractChrome";
import * as utils from "../../utils";

export class RemoteChrome extends AbstractChrome {

    server_port: number;

    constructor() {
        super(utils.getEnvVar("REMOTE_CHROME_IP"));
        this.server_port = parseInt(utils.getEnvVar("REMOTE_CHROME_PORT"));
    }

    async launch(options: any) {
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
    }

    async close() {
        this.port = undefined;
        console.log("Remote Chrome closed");
    }
}