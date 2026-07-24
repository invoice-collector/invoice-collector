import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Element } from '../driver/driver';
import { ModelInvoice } from '../model/credential';
import { CustomerAuthenticationMethod } from '../model/customer';

export enum CollectorState {
    PLANNED = 'planned',
    DEVELOPMENT = 'development',
    ACTIVE = 'active'
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
    FRIENDLY_CAPTCHA = 'friendly_captcha',
    HCAPTCHA = 'hcaptcha',
    OTHER = 'other'
}

// Authentication methods supported by a collector
export enum CollectorAuthenticationMethod {
    SECRETS_ONLY = 'secretsOnly',
    INTERACTIVE_ONLY = 'interactiveOnly',
    ALL = 'all'
}

// Resolved authentication method for a given collect
export enum ResolvedAuthenticationMethod {
    DIRECT = 'direct',
    INTERACTIVE = 'interactive'
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
    hash: string | null,
    collected_timestamp: number | null,
    downloadButton: Element | null,
    metadata: Record<string, any>,
}

export abstract class AbstractCollector<C extends Config> {

    /**
     * Resolve the authentication method to use for a collect, based on the customer preference
     * and the collector authentication method.
     * Returns null if the customer preference and the collector are strictly incompatible.
     */
    static resolveAuthenticationMethod(
        customerAuthenticationMethod: CustomerAuthenticationMethod,
        config: Config
    ): ResolvedAuthenticationMethod | null {
        // Get collector authentication method (collectors without the field only support direct login)
        const collectorAuthenticationMethod = ('authenticationMethod' in config
            ? (config as any).authenticationMethod
            : CollectorAuthenticationMethod.SECRETS_ONLY) as CollectorAuthenticationMethod;

        // Compute methods supported by the collector
        const collectorSupportsDirect = collectorAuthenticationMethod === CollectorAuthenticationMethod.SECRETS_ONLY
            || collectorAuthenticationMethod === CollectorAuthenticationMethod.ALL;
        const collectorSupportsInteractive = collectorAuthenticationMethod === CollectorAuthenticationMethod.INTERACTIVE_ONLY
            || collectorAuthenticationMethod === CollectorAuthenticationMethod.ALL;

        // Compute methods accepted by the customer
        const customerAcceptsDirect = customerAuthenticationMethod !== CustomerAuthenticationMethod.INTERACTIVE_ONLY;
        const customerAcceptsInteractive = customerAuthenticationMethod !== CustomerAuthenticationMethod.SECRETS_ONLY;

        // Compute which methods are possible for both the collector and the customer
        const canDirect = collectorSupportsDirect && customerAcceptsDirect;
        const canInteractive = collectorSupportsInteractive && customerAcceptsInteractive;

        // Strictly incompatible: no method available
        if (!canDirect && !canInteractive) {
            return null;
        }
        // Only one method available
        if (canDirect && !canInteractive) {
            return ResolvedAuthenticationMethod.DIRECT;
        }
        if (!canDirect && canInteractive) {
            return ResolvedAuthenticationMethod.INTERACTIVE;
        }
        // Both methods available: resolve using the customer preference
        switch (customerAuthenticationMethod) {
            case CustomerAuthenticationMethod.SECRETS_PREFERRED:
                return ResolvedAuthenticationMethod.DIRECT;
            case CustomerAuthenticationMethod.INTERACTIVE_PREFERRED:
                return ResolvedAuthenticationMethod.INTERACTIVE;
            case CustomerAuthenticationMethod.LET_USER_DECIDE:
            default:
                // No strong preference: default to interactive login
                return ResolvedAuthenticationMethod.INTERACTIVE;
        }
    }

    static updateCollectorParams(customerAuthenticationMethod: CustomerAuthenticationMethod, config: Config): boolean {
        // Resolve the authentication method to use for this collector
        const resolvedAuthenticationMethod = AbstractCollector.resolveAuthenticationMethod(customerAuthenticationMethod, config);
        // Use interactive login when the resolved method is interactive
        const useInteractiveLogin = resolvedAuthenticationMethod === ResolvedAuthenticationMethod.INTERACTIVE;
        // If interactive login is used, params are not needed anymore
        if (useInteractiveLogin) {
            // Remove all params
            config.params = {};
        }
        return useInteractiveLogin;
    }

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
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        locale: string,
        location: Location | null,
        customerAuthenticationMethod: CustomerAuthenticationMethod
    ): Promise<CompleteInvoice[]>;
}