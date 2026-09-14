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

    /**
     * Constructs a new EmailProvider instance.
     * @param config The configuration object for the email provider.
     */
    constructor(config: EmailProviderConfig) {
        super({
            ...config,
            type: CollectorType.PROVIDER,
            state: config.state || CollectorState.ACTIVE,
        });
    }

    /**
     * @inheritdoc
     */
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
    
        await this.authenticate(await secret.getParams(), webSocketServer);

        // Set progress step to collecting
        state.update(State._5_COLLECTING);
        webSocketServer?.sendState(State._5_COLLECTING);

        // Email providers only authenticate the account and do not collect invoices.
        return [];
    }

    /**
     * Authenticates the email provider with the given parameters.
     * @param params The authentication parameters required by the email provider.
     * @param webSocketServer The WebSocket server used for interactive authentication, if needed.
     */
    abstract authenticate(params: any, webSocketServer?: WebSocketServer): Promise<void>;

    /**
     * Gets the list of invoices matching the given wildcards.
     * @param wildcards The wildcards to match against email sender, subject, body, and attachment name.
     * @param download_from_timestamp The timestamp from which to start downloading invoices.
     */
    abstract getInvoices(wildcards: EmailInvoiceWildcards, download_from_timestamp: number): Promise<EmailInvoice[]>;

    /**
     * Downloads the attachment referenced by the given invoice.
     * @param invoice The invoice referencing the attachment to be downloaded.
     * @returns A promise that resolves to the downloaded email invoice, including the attachment data and mimetype.
     */
    abstract downloadInvoice(invoice: EmailInvoice): Promise<DownloadedEmailInvoice>;
}