export abstract class AbstractChrome {
    ip: string;
    port: number|undefined;

    constructor(ip: string) {
        this.ip = ip;
    }

    get url(): string|undefined {
        return this.port ? `http://${this.ip}:${this.port}` : undefined;
    }

    abstract launch(options: any): Promise<void>;
    abstract close(): Promise<void>;
}
