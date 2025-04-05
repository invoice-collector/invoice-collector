export abstract class AbstractChrome {
    ip: string;
    port: number|undefined;
    wsid: string|undefined;

    constructor(ip: string) {
        this.ip = ip;
    }

    get url(): string|undefined {
        return this.port ? `http://${this.ip}:${this.port}` : undefined;
    }

    get wsUrl(): string|undefined {
        return this.wsid ? `ws://${this.ip}:${this.port}/devtools/browser/${this.wsid}` : undefined;
    }

    abstract launch(options: any): Promise<void>;
    abstract close(): Promise<void>;
}
