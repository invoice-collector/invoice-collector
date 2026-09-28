import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { Secret } from '../model/secret';

export type IntegrationConfig = {
    id: string,
    name: string,
    description: string,
    state: 'active' | 'planned',
    params: {
        [key: string]: {
            type: 'text' | 'password' | 'url',
            name: string,
            placeholder: string,
            mandatory: boolean,
            default?: any,
        }
    }
}

export abstract class AbstractIntegration {

    config: IntegrationConfig;
    secret: Secret;

    /**
     * Constructs an instance of the integration.
     * @param config The configuration for the integration.
     * @param secret The secrets for the integration.
     */
    constructor(config: IntegrationConfig, secret: Secret) {
        this.config = config;
        this.secret = secret;
    }

    /**
     * Checks if all mandatory parameters are present in the given parameters object.
     * @param params The parameters to check for mandatory values.
     */
    async checkMandatoryParams(params: Record<string, any>): Promise<void> {
        for (const [param, paramConfig] of Object.entries(this.config.params)) {
            if (paramConfig.mandatory && !params[param]) {
                throw new Error(`Mandatory parameter ${param} not defined in integration secret parameters`);
            }
        }
    }

    /**
     * Sends an invoice to the integration.
     * @param collector The configuration of the collector sending the invoice.
     * @param remote_id The remote identifier for the invoice in the integration system.
     * @param invoice The complete invoice data to be sent.
     */
    abstract sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void>;

    /**
     * Sends a disconnected notification to the integration.
     * @param collector The configuration of the collector sending the notification.
     * @param credential_id The identifier of the credential that was disconnected.
     * @param user_id The identifier of the user associated with the disconnection.
     * @param remote_id The remote identifier related to the disconnection.
     */
    abstract sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void>;
}
