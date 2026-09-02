import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { CompleteInvoice, CollectorState, CollectorType, Config } from './abstractCollector';
import { V2Collector } from './v2Collector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Credential, ModelInvoice } from '../model/credential';

export type EmailProviderConfig = Config & {
    // Add fields if needed
}

export type EmailInvoiceWildcards = {
    sender: string,
    subject: string,
    body: string,
    attachmentName: string
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

export abstract class EmailProvider extends V2Collector<EmailProviderConfig> {

    constructor(config: EmailProviderConfig) {
        super({
            ...config,
            type: CollectorType.PROVIDER,
            state: config.state || CollectorState.ACTIVE,
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
        providers: Credential[],
    ): Promise<CompleteInvoice[]> {
        // Set progress step to logging in
        state.update(State._2_LOGGING_IN);
        webSocketServer?.sendState(State._2_LOGGING_IN);
    
        await this.authenticate(await secret.getParams());

        // Set progress step to collecting
        state.update(State._5_COLLECTING);
        webSocketServer?.sendState(State._5_COLLECTING);

        // Email providers only authenticate the account and do not collect invoices.
        return [];
    }

    abstract authenticate(params: any): Promise<void>;

    // Find emails matching the given wildcards, on the mailbox connection opened by authenticate()
    abstract getInvoices(wildcards: EmailInvoiceWildcards, download_from_timestamp: number): Promise<EmailInvoice[]>;

    // Download the attachment referenced by the invoice returned by getInvoices()
    abstract downloadInvoice(invoice: EmailInvoice): Promise<DownloadedEmailInvoice>;
}