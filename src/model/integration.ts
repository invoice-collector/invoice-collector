import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { IntegrationHandlerFactory } from "../integrationHandler/integrationFactory";
import { Secret } from "../model/secret";

export class Integration {

    id: string;
    integration_id: string;
    secret_id: string;
    createdAt: number;
    lastUsed: number;
    automaticExport: boolean;

    constructor(
        integration_id: string,
        secret_id: string,
        createdAt: number,
        lastUsed: number,
        automaticExport: boolean
    ) {
        this.id = "";
        this.integration_id = integration_id;
        this.secret_id = secret_id;
        this.createdAt = createdAt;
        this.lastUsed = lastUsed;
        this.automaticExport = automaticExport;
    }

    getSecret(): Secret {
        let secret = new Secret(this.integration_id);
        secret.id = this.secret_id;
        return secret;
    }

    sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        const integrationHandler = IntegrationHandlerFactory.getIntegration(this.integration_id, this.getSecret());
        return integrationHandler.sendInvoice(collector, remote_id, invoice);
    }

    sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        const integrationHandler = IntegrationHandlerFactory.getIntegration(this.integration_id, this.getSecret());
        return integrationHandler.sendNotificationDisconnected(collector, credential_id, user_id, remote_id);
    }
}
