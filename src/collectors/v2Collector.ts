import { Location } from '../proxy/abstractProxy';
import { Secret } from '../secret_manager/abstractSecretManager';
import { TwofaPromise } from '../collect/twofaPromise';
import { State } from '../model/state';
import { AbstractCollector, CompleteInvoice, Config } from './abstractCollector';
import { WebSocketServer } from '../websocket/webSocketServer';

export abstract class V2Collector<C extends Config> extends AbstractCollector<C> {

    constructor(config: C) {
        super(config);
    }

    async collect_new_invoices(
        state: State,
        twofa_promise: TwofaPromise,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]> {
        // Check if a mandatory field is missing
        for (const [key, value] of Object.entries(this.config.params)) {
            if (value.mandatory && !secret.params[key]) {
                throw new Error(`Field "${key}" is missing.`);
            }
        }

        try {
            // Get invoices
            return await this._collect(state, twofa_promise, webSocketServer, secret, download_from_timestamp, previousInvoices, location);
        }
        finally {
            // Close the collector resources
            await this._close();
        }
    }

    //NOT IMPLEMENTED

    abstract _collect(
        state: State,
        twofa_promise: TwofaPromise,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]>;

    abstract _close(): Promise<void>;
}