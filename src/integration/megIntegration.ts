import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { AbstractIntegration, IntegrationConfig } from './abstractIntegration';
import { Secret } from '../model/secret';

export class MegIntegration extends AbstractIntegration { 

    static CONFIG: IntegrationConfig = {
        id: "meg",
        name: "MEG",
        description: "i18n.integrations.meg.description",
        state: 'planned',
        params: {
            //TODO: add specific params here
        }
    };
    
    constructor(secret: Secret) {
        super(MegIntegration.CONFIG, secret);
    }

    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }

    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        throw new Error(`${this.config.name} integration is not implemented yet.`);
    }
}
