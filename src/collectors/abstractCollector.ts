import axios from 'axios';

export class AbstractCollector {
    config: any;
    downloadMethods: { [key: string]: (invoice: any) => Promise<void> };

    constructor(config) {
        this.config = config;
        this.downloadMethods = {
            "link": this.download_direct_link,
            "bytes": this.download_bytes,
        };
    }

    async download(invoices): Promise<void> {
        for(let invoice of invoices) {
            if (this.downloadMethods[invoice.type]) {
                await this.downloadMethods[invoice.type].call(this, invoice);
            }
        }

        // Order invoices by timestamp
        invoices.sort((a, b) => a.timestamp - b.timestamp);
    }

    async download_direct_link(invoice): Promise<void> {
        const response = await axios.get(invoice.link, {
            responseType: 'arraybuffer',
        });
        invoice.data = response.data.toString("base64");
        invoice.type = "base64";
    }

    async download_bytes(invoice): Promise<void> {
        invoice.data = btoa(String.fromCharCode.apply(null, invoice.bytes));
        delete invoice.bytes;
        invoice.type = "base64";
    }

    async collect_new_invoices(params, download, previousInvoices, locale): Promise<any[]> {
            const invoices = await this.collect(params, locale);

            // Get new invoices
            const newInvoices = invoices.filter((inv) => !previousInvoices.includes(inv.id));

            if(newInvoices.length > 0) {
                console.log(`Found ${invoices.length} invoices but only ${newInvoices.length} are new`);

                // Download new invoices if needed
                if(download) {
                    console.log(`Downloading ${newInvoices.length} invoices`);
                    await this.download(newInvoices);
                }
                else {
                    console.log(`This is the first collect. Do not download invoices`);
                }
            }
            else {
                console.log(`Found ${invoices.length} invoices but none are new`);
            }

            // Close the collector resources
            this.close();

            return newInvoices;
    }

    //NOT IMPLEMENTED

    async collect(params, locale): Promise<any[]> {
        throw new Error('`collect` is not implemented.');
    }

    async close() {
        // Assume the collector does not need to close anything
    }
}
