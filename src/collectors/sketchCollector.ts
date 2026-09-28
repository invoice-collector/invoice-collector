import { CollectorType, CollectorState, Invoice, CollectorAuthenticationMethod } from './abstractCollector';
import { WebConfig } from './webCollector';
import { AbstractDriver } from '../driver/abstractDriver';
import { Element } from '../driver/element';
import { WebSocketServer } from '../websocket/webSocketServer';
import { LinearWebCollector } from './linearWebCollector';

export type SketchConfig = WebConfig & {
}

export abstract class SketchCollector extends LinearWebCollector {

    /**
     * Constructs a new instance of the SketchCollector class.
     * @param config The configuration object for the SketchCollector instance.
     */
    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.PLANNED,
            authenticationMethod: CollectorAuthenticationMethod.ALL,
        });
    }

    /**
     * @inheritdoc
     */
    async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return;
    }

    /**
     * @inheritdoc
     */
    async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return true;
    }

    /**
     * @inheritdoc
     */
    async getInvoices(driver: AbstractDriver): Promise<Element[]> {
        return [];
    }

    /**
     * @inheritdoc
     */
    async data(driver: AbstractDriver, element: Element): Promise<Invoice | null> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     */
    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
}
