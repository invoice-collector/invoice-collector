import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { DatabaseFactory } from '../database/databaseFactory';
import { AbstractIntegration } from '../integration/abstractIntegration';
import { IntegrationFactory } from '../integration/integrationFactory';
import { Secret } from '../model/secret';
import { SecretManagerFactory } from '../secret_manager/secretManagerFactory';

export class Callback {

    static DEFAULT_AUTOMATIC_EXPORT: boolean = true;

    id: string;
    customer_user_id: string;
    integration_id: string;
    secret_id: string;
    createdAt: number;
    automaticExport: boolean;

    /**
     * Constructs a new Callback instance.
     * @param customer_user_id The ID of the customer user associated with the callback.
     * @param integration_id The ID of the integration associated with the callback.
     * @param secret_id The ID of the secret associated with the callback.
     * @param createdAt The timestamp of when the callback was created.
     * @param automaticExport Indicates whether automatic export is enabled for the callback.
     */
    constructor(
        customer_user_id: string,
        integration_id: string,
        secret_id: string,
        createdAt: number,
        automaticExport: boolean,
    ) {
        this.id = '';
        this.customer_user_id = customer_user_id;
        this.integration_id = integration_id;
        this.secret_id = secret_id;
        this.createdAt = createdAt;
        this.automaticExport = automaticExport;
    }

    /**
     * Gets the secret associated with the callback.
     * @returns The secret instance associated with the callback.
     */
    private getSecret(): Secret {
        const secret = new Secret(`${this.id}_${this.customer_user_id}_${this.integration_id}`);
        secret.id = this.secret_id;
        return secret;
    }

    /**
     * Gets the integration associated with the callback.
     * @returns The integration instance associated with the callback.
     */
    public getIntegration(): AbstractIntegration {
        return IntegrationFactory.getIntegration(this.integration_id, this.getSecret());
    }

    /**
     * Sends an invoice using the integration associated with the callback.
     * @param collector The configuration for the collector.
     * @param remote_id The remote ID of the invoice.
     * @param invoice The complete invoice data to be sent.
     * @returns A promise that resolves when the invoice has been sent.
     */
    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        return this.getIntegration().sendInvoice(collector, remote_id, invoice);
    }

    /**
     * Sends a disconnected notification using the integration associated with the callback.
     * @param collector The configuration for the collector.
     * @param credential_id The ID of the credential associated with the disconnection.
     * @param user_id The ID of the user associated with the disconnection.
     * @param remote_id The remote ID related to the disconnection.
     * @returns A promise that resolves when the notification has been sent.
     */
    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        return this.getIntegration().sendNotificationDisconnected(collector, credential_id, user_id, remote_id);
    }
    
    /**
     * Deletes the callback and its associated secret from the system.
     */
    async delete(): Promise<void> {
        // Delete secret from Secret Manager
        await SecretManagerFactory.getSecretManager().deleteSecret(this.secret_id);
        // Delete callback from database
        await DatabaseFactory.getDatabase().deleteCallback(this.id);
    }

    /**
     * Commits the current state of the callback to the database.
     * Creates a new callback entry if it does not already exist.
     * Updates the existing entry otherwise.
     */
    async commit(): Promise<void> {
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
