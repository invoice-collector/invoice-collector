import { AbstractChrome } from "./abstractChrome";

export class RemoteChrome extends AbstractChrome {

    server_port: number;

    constructor() {
        if (!process.env.REMOTE_CHROME_IP) {
            throw new Error("REMOTE_CHROME_IP environment variable is required");
        }
        if (!process.env.REMOTE_CHROME_PORT) {
            throw new Error("REMOTE_CHROME_PORT environment variable is required");
        }
        super(process.env.REMOTE_CHROME_IP);
        this.server_port = parseInt(process.env.REMOTE_CHROME_PORT);
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