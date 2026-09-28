import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { AbstractIntegration, IntegrationConfig } from './abstractIntegration';
import { Secret } from '../model/secret';

export class ChaintrustIntegration extends AbstractIntegration { 

    static CONFIG: IntegrationConfig = {
        id: 'chaintrust',
        name: 'Chaintrust',
        description: 'i18n.integrations.chaintrust.description',
        state: 'planned',
        params: {
            //TODO: add specific params here
        },
    };

    /**
     * Constructs an instance of the Chaintrust integration.
     * @param secret The secrets for the integration.
     */
    constructor(secret: Secret) {
        super(ChaintrustIntegration.CONFIG, secret);
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
