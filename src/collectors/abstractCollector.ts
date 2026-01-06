import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { Secret } from '../secret_manager/abstractSecretManager';
import { TwofaPromise } from '../collect/twofaPromise';
import { State } from '../model/state';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Element } from '../driver/driver';

export enum CollectorState {
    DEVELOPMENT = 'development',
    ACTIVE = 'active',
    MAINTENANCE = 'maintenance'
}

export enum CollectorType {
    WEB = 'web',
    AGENT = 'agent',
    API = 'api',
    EMAIL = 'email',
    SKETCH = 'sketch'
}

export enum CollectorCaptcha {
    NONE = 'none',
    DATADOME = 'datadome',
    CLOUDFLARE = 'cloudflare',
    RECAPTCHA = 'recaptcha',
    OTHER = 'other'
}

export type Config = {
    id: string,
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    type: CollectorType,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    state?: CollectorState
}

export type Invoice = {
    id: string,
    timestamp: number,
    amount?: string,
    link: string,
    downloadButton: Element,
    metadata?: Record<string, any>

}

export type DownloadedInvoice = Invoice & {
    documents: string[],
    metadata?: Record<string, any>,
}

export type CompleteInvoice = Omit<Invoice, 'downloadButton'> & {
    data: string | null,
    mimetype: string | null,
    collected_timestamp: number | null,
    downloadButton: Element | null,
    metadata: Record<string, any>,
}

export abstract class AbstractCollector<C extends Config> {
    config: C;

    constructor(config: C) {
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
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]>;
}