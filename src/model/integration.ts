import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { AbstractIntegrationHandler } from "../integrationHandler/abstractIntegrationHandler";
import { IntegrationHandlerFactory } from "../integrationHandler/integrationFactory";
import { Secret } from "../model/secret";

export class Integration {

    id: string;
    customer_user_id: string;
    name: string;
    secret_id: string;
    createdAt: number;
    lastUsed: number;
    automaticExport: boolean;

    constructor(
        customer_user_id: string,
        name: string,
        secret_id: string,
        createdAt: number,
        lastUsed: number,
        automaticExport: boolean
    ) {
        this.id = "";
        this.customer_user_id = customer_user_id;
        this.name = name;
        this.secret_id = secret_id;
        this.createdAt = createdAt;
        this.lastUsed = lastUsed;
        this.automaticExport = automaticExport;
    }

    private getSecret(): Secret {
        let secret = new Secret(`${this.id}_${this.customer_user_id}_${this.name}`);
        secret.id = this.secret_id;
        return secret;
    }

    private getIntegrationHandler(): AbstractIntegrationHandler {
        return IntegrationHandlerFactory.getIntegration(this.name, this.getSecret());
    }

    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        return this.getIntegrationHandler().sendInvoice(collector, remote_id, invoice);
    }

    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        return this.getIntegrationHandler().sendNotificationDisconnected(collector, credential_id, user_id, remote_id);
    }
}
