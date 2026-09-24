import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { AbstractIntegration, IntegrationConfig } from './abstractIntegration';
import { Secret } from '../model/secret';

/**
 * Axonaut integration class to upload supplier invoices to Axonaut.
 * @see https://axonaut.com/api/v2/doc for more information about Axonaut
 */
export class AxonautIntegration extends AbstractIntegration { 

    static CONFIG: IntegrationConfig = {
        id: 'axonaut',
        name: 'Axonaut',
        description: 'i18n.integrations.axonaut.description',
        state: 'planned',
        params: {
            //TODO: add specific params here
        },
    };
    
    /**
     * Constructs an instance of the Axonaut integration.
     * @param secret The secrets for the integration.
     */
    constructor(secret: Secret) {
        super(AxonautIntegration.CONFIG, secret);
    }

    /**
     * @inheritdoc
     */
    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }

    /**
     * @inheritdoc
     */
    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }
}
