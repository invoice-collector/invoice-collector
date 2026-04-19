import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { DatabaseFactory } from "../database/databaseFactory";
import { AbstractIntegration } from "../integration/abstractIntegration";
import { IntegrationFactory } from "../integration/integrationFactory";
import { Secret } from "../model/secret";
import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";

export class Callback {

    static DEFAULT_AUTOMATIC_EXPORT: boolean = true;

    id: string;
    customer_user_id: string;
    integration_id: string;
    secret_id: string;
    createdAt: number;
    automaticExport: boolean;

    constructor(
        customer_user_id: string,
        integration_id: string,
        secret_id: string,
        createdAt: number,
        automaticExport: boolean
    ) {
        this.id = "";
        this.customer_user_id = customer_user_id;
        this.integration_id = integration_id;
        this.secret_id = secret_id;
        this.createdAt = createdAt;
        this.automaticExport = automaticExport;
    }

    private getSecret(): Secret {
        let secret = new Secret(`${this.id}_${this.customer_user_id}_${this.integration_id}`);
        secret.id = this.secret_id;
        return secret;
    }

    public getIntegration(): AbstractIntegration {
        return IntegrationFactory.getIntegration(this.integration_id, this.getSecret());
    }

    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        return this.getIntegration().sendInvoice(collector, remote_id, invoice);
    }

    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        return this.getIntegration().sendNotificationDisconnected(collector, credential_id, user_id, remote_id);
    }
    
    
    async delete() {
        // Delete secret from Secure Storage
        await SecretManagerFactory.getSecretManager().deleteSecret(this.secret_id);
        // Delete callback from database
        await DatabaseFactory.getDatabase().deleteCallback(this.id);
    }
        
    async commit() {
        if (this.id) {
            // Update existing callback
            await DatabaseFactory.getDatabase().updateCallback(this);
        }
        else {
            // Create callback
            await DatabaseFactory.getDatabase().createCallback(this);
        }
    }
}
