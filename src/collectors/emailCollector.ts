import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { CompleteInvoice, CollectorState, CollectorType, Config } from './abstractCollector';
import { V2Collector } from './v2Collector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Credential, ModelInvoice } from '../model/credential';
import type { EmailInvoiceWildcards, EmailProvider } from './emailProvider';
import { DisconnectedError } from '../error';
import * as utils from '../utils';
import { CollectorLoader } from './collectorLoader';

export type EmailCollectorConfig = Config & {
    wildcards: {
        sender: string,
        subject: string,
        body: string,
        attachmentName: string
    }
}

export abstract class EmailCollector extends V2Collector<EmailCollectorConfig> {

    constructor(config: EmailCollectorConfig) {
        super({
            ...config,
            type: config.type || CollectorType.EMAIL,
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
        const completeInvoices: CompleteInvoice[] = [];

        // If no provider, raise Disconnected error
        if (!providers || providers.length === 0) {
            throw new DisconnectedError('i18n.collectors.email.no_provider', this);
        }

        let atLeastOneProviderSucceeded = false;

        // For each provider
        for (const provider of providers) {
            // Get email provider instance
            const emailProvider = await CollectorLoader.get(provider.collector_id) as EmailProvider;
            try {
                // Get provider secret
                const providerSecret = provider.getSecret();

                // Set progress step to logging in
                state.update(State._2_LOGGING_IN);
                webSocketServer?.sendState(State._2_LOGGING_IN);

                try {
                    // Authenticate to open the underlying mailbox connection
                    await emailProvider.authenticate(await providerSecret.getParams());
                } catch (error) {
                    continue;
                }

                const wildcards: EmailInvoiceWildcards = {
                    sender: this.config.wildcards.sender,
                    subject: this.config.wildcards.subject,
                    body: this.config.wildcards.body,
                    attachmentName: this.config.wildcards.attachmentName,
                };

                // Set progress step to downloading
                state.update(State._5_COLLECTING);
                webSocketServer?.sendState(State._5_COLLECTING);

                // Get emails matching the wildcards since download_from_timestamp
                const invoices = await emailProvider.getInvoices(wildcards, download_from_timestamp);

                // Keep only the new invoices
                const previousInvoiceIds = previousInvoices.map(invoice => invoice.id);
                const newInvoices = invoices.filter(invoice => !previousInvoiceIds.includes(invoice.id));

                if (newInvoices.length > 0) {
                    // Set progress step to downloading
                    state.update(State._6_DOWNLOADING);
                    webSocketServer?.sendState(State._6_DOWNLOADING);
                }

                for (const invoice of newInvoices) {
                    // If invoice is more recent than the download_from_timestamp
                    if (download_from_timestamp <= invoice.timestamp) {
                        const downloadedInvoice = await emailProvider.downloadInvoice(invoice);
                        completeInvoices.push({
                            id: downloadedInvoice.id,
                            timestamp: downloadedInvoice.timestamp,
                            link: '',
                            downloadButton: null,
                            data: downloadedInvoice.data,
                            mimetype: downloadedInvoice.mimetype,
                            hash: utils.hash_string(downloadedInvoice.data, 'md5'),
                            collected_timestamp: Date.now(),
                            metadata: downloadedInvoice.metadata,
                        });
                    }
                    else {
                        // Add invoice without downloading it
                        completeInvoices.push({
                            id: invoice.id,
                            timestamp: invoice.timestamp,
                            link: '',
                            downloadButton: null,
                            data: null,
                            mimetype: null,
                            hash: null,
                            collected_timestamp: null,
                            metadata: invoice.metadata,
                        });
                    }
                }
                atLeastOneProviderSucceeded = true;
            }
            finally {
                // Close the underlying mailbox connection
                await emailProvider._close();
            }
        }
        if (!atLeastOneProviderSucceeded && webSocketServer) {
            throw new DisconnectedError('i18n.collectors.email.authentication_failed', this);
        }
        return completeInvoices;
    }

    async _close(): Promise<void> {
        // The email provider connection is already closed right after each collect.
    }
}
