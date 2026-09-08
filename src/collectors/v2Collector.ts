import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { AbstractCollector, CompleteInvoice, Config } from './abstractCollector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { AuthenticationError } from '../error';
import { Credential, ModelInvoice } from '../model/credential';
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
        locale: string,
        location: Location | null,
        customerAuthenticationMethod: CustomerAuthenticationMethod,
        providers: Credential[],
    ): Promise<CompleteInvoice[]> {
        // Update collector params based on customerAuthenticationMethod
        const useInteractiveLogin = AbstractCollector.updateCollectorParams(customerAuthenticationMethod, this.config);

        // Check if a mandatory field is missing
        const secretParams = await secret.getParams();
        for (const [key, value] of Object.entries(this.config.params)) {
            if (value.mandatory && !secretParams.hasOwnProperty(key)) {
                throw new AuthenticationError('i18n.collectors.all.missing_param', this);
            }
        }

        try {
            // Get invoices
            return await this._collect(
                state,
                webSocketServer,
                secret,
                download_from_timestamp,
                previousInvoices,
                locale,
                location,
                useInteractiveLogin,
                providers,
            );
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
        locale: string,
        location: Location | null,
        useInteractiveLogin: boolean,
        providers: Credential[]
    ): Promise<CompleteInvoice[]>;

    abstract _close(): Promise<void>;
}