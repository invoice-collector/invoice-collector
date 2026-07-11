import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { AbstractCollector, CompleteInvoice, Config } from './abstractCollector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { AuthenticationError } from '../error';
import { ModelInvoice } from '../model/credential';
import { CustomerAuthenticationMethod } from '../model/customer';

export abstract class V2Collector<C extends Config> extends AbstractCollector<C> {

    constructor(config: C) {
        super(config);
    }

    async collect_new_invoices(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        location: Location | null,
        customerAuthenticationMethod: CustomerAuthenticationMethod
    ): Promise<CompleteInvoice[]> {
        // Update collector params based on customerAuthenticationMethod
        const useInteractiveLogin = AbstractCollector.updateCollectorParams(customerAuthenticationMethod, this.config)

        // Check if a mandatory field is missing
        for (const [key, value] of Object.entries(this.config.params)) {
            const secretParams = await secret.getParams();
            if (value.mandatory && !secretParams[key]) {
                throw new AuthenticationError('i18n.collectors.all.missing_param', this);
            }
        }

        try {
            // Get invoices
            return await this._collect(state, webSocketServer, secret, download_from_timestamp, previousInvoices, location, useInteractiveLogin);
        }
        finally {
            // Close the collector resources
            await this._close();
        }
    }

    //NOT IMPLEMENTED

    abstract _collect(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null,
        useInteractiveLogin: boolean
    ): Promise<CompleteInvoice[]>;

    abstract _close(): Promise<void>;
}