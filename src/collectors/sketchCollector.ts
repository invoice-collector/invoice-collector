import { CollectorType, CollectorState, Invoice } from "./abstractCollector";
import { WebCollector, WebConfig } from "./webCollector";
import { Driver, Element } from "../driver/driver";
import { WebSocketServer } from "../websocket/webSocketServer";

export type SketchConfig = WebConfig & {
}

export abstract class SketchCollector extends WebCollector {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.DEVELOPMENT,
            enableInteractiveLogin: true
        });
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return;
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return true;
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        return [];
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        throw new Error("Method not implemented.");
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}
