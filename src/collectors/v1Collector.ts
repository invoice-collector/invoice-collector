import { Location } from '../proxy/abstractProxy';
import { Secret } from '../secret_manager/abstractSecretManager';
import { TwofaPromise } from '../collect/twofaPromise';
import { State } from '../model/state';
import { AbstractCollector, CompleteInvoice, Config, Invoice } from './abstractCollector';
import { WebSocketServer } from '../websocket/webSocketServer';

export abstract class V1Collector<C extends Config> extends AbstractCollector<C> {

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
        location: Location | null,
        customerEnableInteractiveLogin
    ): Promise<CompleteInvoice[]> {
        // Check if a mandatory field is missing
        for (const [key, value] of Object.entries(this.config.params)) {
            if (value.mandatory && !secret.params[key]) {
                throw new Error(`Field "${key}" is missing.`);
            }
        }

        try {
            // Get invoices
            const invoices = (await this._collect(state, secret, location, twofa_promise))

            // Remove duplicates
            const uniqueInvoices = invoices.filter((inv, index, self) =>
                index === self.findIndex((i) => i.id === inv.id)
            );

            // Get previous invoice ids
            const previousInvoiceIds = previousInvoices.map((inv) => inv.id);

            // Get new invoices only
            const newInvoices = uniqueInvoices.filter((inv) => !previousInvoiceIds.includes(inv.id));

            // Count number of invoices to download only
            const invoicesToDownload = uniqueInvoices.filter((inv) => inv.timestamp >= download_from_timestamp).length;

            let completeInvoices: CompleteInvoice[] = [];

            if(newInvoices.length > 0) {
                console.log(`Found ${uniqueInvoices.length} invoices, ${newInvoices.length} are new, ${invoicesToDownload} are to download`);
                console.log(`Downloading invoices since ${new Date(download_from_timestamp).toISOString()}`);

                // Set progress step to downloading
                state.update(State._6_DOWNLOADING);
                webSocketServer?.sendState(State._6_DOWNLOADING);

                // For each new invoice
                for(let newInvoice of newInvoices) {
                    // If invoice is more recent than the download_from_timestamp
                    if (download_from_timestamp <= newInvoice.timestamp) {
                        const completeInvoice = await this._download(newInvoice);

                        console.log(`Invoice ${newInvoice.id} successfully downloaded`);
                        completeInvoices.push(completeInvoice);
                    }
                    else {
                        // Add invoice without downloading it
                        completeInvoices.push({
                            ...newInvoice,
                            data: null,
                            mimetype: null,
                            hash: null,
                            collected_timestamp: null,
                            metadata: {}
                        });
                    }
                }

                // Order invoices by timestamp
                completeInvoices.sort((a, b) => a.timestamp - b.timestamp);
            }
            else {
                console.log(`Found ${uniqueInvoices.length} invoices but none are new`);
            }

            return completeInvoices;
        }
        finally {
            // Close the collector resources
            await this._close();
        }
    }

    //NOT IMPLEMENTED

    abstract _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]>;

    abstract _download(invoice: Invoice): Promise<CompleteInvoice>;

    abstract _close(): Promise<void>;
}