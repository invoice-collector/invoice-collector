import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { CollectorError } from '../error';
import { Server } from '../server';
import { Secret } from '../secret_manager/abstractSecretManager';

export type Config = {
    id: string,
    type: "web" | "api",
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    useProxy: boolean,
    params: {
        [key: string]: {
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    entryUrl?: string,
    baseUrl?: string,
    captcha?: "datadome" | "cloudflare"
}

export type Invoice = {
    id: string,
    timestamp: number,
    amount?: string,
    link?: string
}

export type DownloadedInvoice = Invoice & {
    data: string | null
}

export type CompleteInvoice = DownloadedInvoice & {
    mimetype: string | null
}

export type CompleteCollectResult = {
    invoices: CompleteInvoice[],
    cookies: any
}

export type CollectResult = {
    invoices: Invoice[],
    cookies: any
}

export abstract class AbstractCollector {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    async download_direct_link(invoice: Invoice): Promise<DownloadedInvoice> {
        if (!invoice.link) {
            throw new Error('Field `link` is missing in the invoice object.');
        }
        const response = await axios.get(invoice.link, {
            responseType: 'arraybuffer',
        });
        return {
            ...invoice,
            data: response.data.toString("base64")
        };
    }

    async collect_new_invoices(secret: Secret, download: boolean, previousInvoices: any[], locale: string, location: Location | null): Promise<CompleteCollectResult> {  
        // Check if a mandatory field is missing
            for (const [key, value] of Object.entries(this.config.params)) {
                if (value.mandatory && !secret.params[key]) {
                    throw new Error(`Field "${key}" is missing.`);
                }
            }

            try {
                const { invoices, cookies } = await this._collect(secret, location);

                // Get new invoices
                const newInvoices = invoices.filter((inv) => !previousInvoices.includes(inv.id));
                let completeInvoices: CompleteInvoice[] = [];

                if(newInvoices.length > 0) {
                    console.log(`Found ${invoices.length} invoices but only ${newInvoices.length} are new`);

                    // Download new invoices if needed
                    if(download) {
                        console.log(`Downloading ${newInvoices.length} invoices`);

                        // For each invoice
                        for(let newInvoice of newInvoices) {
                            const completeInvoice = await this._download(newInvoice);

                            // If data is not null, the invoice is ready
                            if(completeInvoice.data != null && completeInvoice.data.length > 0) {
                                completeInvoices.push(completeInvoice);
                            }
                        }

                        // Order invoices by timestamp
                        completeInvoices.sort((a, b) => a.timestamp - b.timestamp);
                    }
                    else {
                        console.log(`This is the first collect, do not download invoices`);

                        // Add not downloaded invoice to the list
                        for(let newInvoice of newInvoices) {
                            completeInvoices.push({
                                ...newInvoice,
                                data: null,
                                mimetype: null
                            });
                        }
                    }
                }
                else {
                    console.log(`Found ${invoices.length} invoices but none are new`);
                }

                return {
                    invoices: completeInvoices,
                    cookies
                }
            }
            catch (error) {
                if (error instanceof CollectorError) {
                    error.message = Server.i18n.__({ phrase: error.message, locale });
                }
                throw error;
            }
            finally {
                // Close the collector resources
                this.close();
            }
    }

    //NOT IMPLEMENTED

    abstract _collect(secret: Secret, location: Location | null): Promise<CollectResult>;

    abstract _download(invoice: Invoice): Promise<CompleteInvoice>;

    async close(): Promise<void> {
        // Assume the collector does not need to close anything
    }
}
