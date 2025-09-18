import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { Secret } from '../secret_manager/abstractSecretManager';
import { TwofaPromise } from '../collect/twofaPromise';
import { State } from '../model/state';

export enum CollectorState {
    DEVELOPMENT = 'development',
    ACTIVE = 'active',
    MAINTENANCE = 'maintenance'
}

export enum CollectorType {
    WEB = 'web',
    API = 'api',
    EMAIL = 'email',
    SKETCH = 'sketch'
}

export enum CollectorCaptcha {
    DATADOME = 'datadome',
    CLOUDFLARE = 'cloudflare',
}

export type Config = {
    id: string,
    type: CollectorType,
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    useProxy: boolean,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    state: CollectorState
    entryUrl?: string,
    baseUrl?: string,
    captcha?: CollectorCaptcha,
    loadImages: boolean,
    autoLogin: {
        cookieNames?: string[],
        localStorageKeys?: string[]
    }
}

export type Invoice = {
    id: string,
    timestamp: number,
    amount?: string,
    link: string,
    metadata?: Record<string, any>,
    downloadData?: Record<string, any>

}

export type DownloadedInvoice = Invoice & {
    documents: string[],
    metadata?: Record<string, any>,
}

export type CompleteInvoice = Invoice & {
    data: string | null,
    mimetype: string | null,
    collected_timestamp: number | null,
    metadata: Record<string, any>,
}

export abstract class AbstractCollector {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    async download_direct_link(invoice: Invoice): Promise<string> {
        if (!invoice.link) {
            throw new Error('Field `link` is missing in the invoice object.');
        }
        const response = await axios.get(invoice.link, {
            responseType: 'arraybuffer',
        });
        return response.data.toString("base64");
    }

    //NOT IMPLEMENTED

    abstract collect_new_invoices(
        state: State,
        twofa_promise: TwofaPromise,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]>;

    async close(): Promise<void> {
        // Assume the collector does not need to close anything
    }
}