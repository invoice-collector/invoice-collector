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

    /**
     * Collects new invoices from the data source.
     * @param state The current state of the collector.
     * @param webSocketServer The WebSocket server instance for real-time updates.
     * @param secret The secret containing authentication credentials.
     * @param download_from_timestamp The timestamp from which to start downloading invoices.
     * @param previousInvoices The list of previously collected invoices.
     * @param locale The locale for localization purposes.
     * @param location The location context for the collection.
     * @param useInteractiveLogin Whether to use interactive login for authentication.
     * @param providers The list of credential providers available for authentication.
     */
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

    /**
     * Closes the collector resources and performs any necessary cleanup.
     */
    abstract _close(): Promise<void>;
}