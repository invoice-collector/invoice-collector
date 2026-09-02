import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { CompleteInvoice, CollectorAuthenticationMethod, CollectorState, CollectorType, Config } from './abstractCollector';
import { V2Collector } from './v2Collector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Credential, ModelInvoice } from '../model/credential';

export type EmailProviderConfig = Config & {
    authenticationMethod?: CollectorAuthenticationMethod
}

export type EmailInvoiceFilters = {
    senderRegex: string,
    subjectRegex: string,
    bodyRegex: string,
    attachmentNameRegex: string
}

export type EmailInvoice = {
    id: string,
    timestamp: number,
    metadata: Record<string, any>
}

export type DownloadedEmailInvoice = EmailInvoice & {
    data: string,
    mimetype: string
}

export abstract class EmailProvider<C extends EmailProviderConfig> extends V2Collector<C> {

    constructor(config: C) {
        super({
            ...config,
            type: CollectorType.PROVIDER,
            state: config.state || CollectorState.ACTIVE,
            authenticationMethod: config.authenticationMethod || CollectorAuthenticationMethod.SECRETS_ONLY
        });
    }

    async _collect(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        locale: string,
        location: Location | null,
        useInteractiveLogin: boolean,
        providers: Credential[]
    ): Promise<CompleteInvoice[]> {
        // Set progress step to logging in
        state.update(State._2_LOGGING_IN);
        webSocketServer?.sendState(State._2_LOGGING_IN);
    
        await this.authenticate(
            state,
            webSocketServer,
            secret,
            locale,
            location
        );

        // Set progress step to collecting
        state.update(State._5_COLLECTING);
        webSocketServer?.sendState(State._5_COLLECTING);

        // Email providers only authenticate the account and do not collect invoices.
        return [];
    }

    abstract authenticate(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        locale: string,
        location: Location | null
    ): Promise<void>;

    // Find emails matching the given filters, on the mailbox connection opened by authenticate()
    abstract getInvoices(filters: EmailInvoiceFilters, download_from_timestamp: number): Promise<EmailInvoice[]>;

    // Download the attachment referenced by the invoice returned by getInvoices()
    abstract downloadInvoice(invoice: EmailInvoice): Promise<DownloadedEmailInvoice>;
}