import { CollectorType, CollectorState, Invoice } from "./abstractCollector";
import { WebCollector, WebConfig } from "./webCollector";
import { Driver, Element } from "../driver/driver";
import { WebSocketServer } from "../websocket/webSocketServer";
import { AuthenticationError } from "../error";

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

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined ): Promise<string | void> {
        throw new AuthenticationError("This collector is available with interactive login only.", this);
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return [];
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        throw new Error("Method not implemented.");
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    async _close(): Promise<void> {
        // Nothing to close
    }
}
