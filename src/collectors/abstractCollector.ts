import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { Secret } from '../secret_manager/abstractSecretManager';
import { TwofaPromise } from '../collect/twofaPromise';
import { State } from '../model/credential';

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

    //NOT IMPLEMENTED

    abstract _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]>;

    abstract _download(invoice: Invoice): Promise<CompleteInvoice>;

    async close(): Promise<void> {
        // Assume the collector does not need to close anything
    }
}
