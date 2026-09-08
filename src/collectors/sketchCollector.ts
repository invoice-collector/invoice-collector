import { CollectorType, CollectorState, Invoice, CollectorAuthenticationMethod } from './abstractCollector';
import { WebConfig } from './webCollector';
import { AbstractDriver } from '../driver/abstractDriver';
import { Element } from '../driver/element';
import { WebSocketServer } from '../websocket/webSocketServer';
import { LinearWebCollector } from './linearWebCollector';

export type SketchConfig = WebConfig & {
}

export abstract class SketchCollector extends LinearWebCollector {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.PLANNED,
            authenticationMethod: CollectorAuthenticationMethod.ALL,
        });
    }

    async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return;
    }

    async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return true;
    }

    async getInvoices(driver: AbstractDriver): Promise<Element[]> {
        return [];
    }

    async data(driver: AbstractDriver, element: Element): Promise<Invoice | null> {
        throw new Error('Method not implemented.');
    }

    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
}
