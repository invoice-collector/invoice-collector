import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { AbstractIntegration, IntegrationConfig } from './abstractIntegration';
import { Secret } from '../model/secret';

export class PennylaneIntegration extends AbstractIntegration { 

    static CONFIG: IntegrationConfig = {
        id: "pennylane",
        name: "Pennylane",
        description: "i18n.integrations.pennylane.description",
        state: 'planned',
        params: {
            //TODO: add specific params here
        }
    };
    
    constructor(secret: Secret) {
        super(PennylaneIntegration.CONFIG, secret);
    }

    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }

    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }
}
