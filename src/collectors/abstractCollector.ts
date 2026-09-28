import axios from 'axios';
import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { WebSocketServer } from '../websocket/webSocketServer';
import { Element } from '../driver/element';
import { Credential, ModelInvoice } from '../model/credential';
import { CustomerAuthenticationMethod } from '../model/customer';
import * as utils from '../utils';

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
    PROVIDER = 'provider',
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
            mandatory: boolean,
            default?: any
        }
    },
    state: CollectorState
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
     * @param customerAuthenticationMethod The authentication method preferred by the customer.
     * @param config The configuration of the collector.
     * @returns null if the customer preference and the collector are strictly incompatible.
     */
    static resolveAuthenticationMethod(
        customerAuthenticationMethod: CustomerAuthenticationMethod,
        config: Config,
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

    /**
     * Updates the collector parameters based on the resolved authentication method.
     * @param customerAuthenticationMethod The authentication method preferred by the customer.
     * @param config The configuration of the collector.
     * @returns A boolean indicating whether interactive login should be used.
     */
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

    /**
     * Constructs a new instance of the collector with the specified configuration.
     * @param config The configuration of the collector.
     */
    constructor(config: C) {
        this.config = config;
    }

    /**
     * Downloads the direct link of the specified invoice as a base64-encoded string.
     * @param invoice The invoice object containing the direct link to download.
     * @returns The base64-encoded content of the invoice's direct link.
     */
    async download_direct_link(invoice: Invoice): Promise<string> {
        if (!invoice.link) {
            throw new Error('Field `link` is missing in the invoice object.');
        }

        // Guard against SSRF: reject links resolving to internal/private/non-HTTPS targets
        await utils.assertPublicHttpsUrl(invoice.link);

        const response = await axios.get(invoice.link, {
            responseType: 'arraybuffer',
        });
        return response.data.toString('base64');
    }

    //NOT IMPLEMENTED

    /**
     * Collects new invoices based on the provided parameters.
     * @param state The current state of the collector.
     * @param webSocketServer The WebSocket server instance for real-time communication, or undefined if not available.
     * @param secret The secret used for authentication or encryption.
     * @param download_from_timestamp The timestamp from which to start downloading new invoices.
     * @param previousInvoices The list of previously collected invoices.
     * @param locale The locale to use for translating messages or content.
     * @param location The location context for the invoice collection.
     * @param customerAuthenticationMethod The authentication method preferred by the customer.
     * @param providers The list of credential providers available for the collection.
     */
    abstract collect_new_invoices(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        locale: string,
        location: Location | null,
        customerAuthenticationMethod: CustomerAuthenticationMethod,
        providers: Credential[]
    ): Promise<CompleteInvoice[]>;
}