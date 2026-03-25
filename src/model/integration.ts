import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { AbstractIntegrationHandler } from "../integrationHandler/abstractIntegrationHandler";
import { IntegrationHandlerFactory } from "../integrationHandler/integrationFactory";
import { Secret } from "../model/secret";

export class Integration {

    id: string;
    secret_id: string;
    createdAt: number;
    lastUsed: number;
    automaticExport: boolean;

    constructor(
        id: string,
        secret_id: string,
        createdAt: number,
        lastUsed: number,
        automaticExport: boolean
    ) {
        this.id = id;
        this.secret_id = secret_id;
        this.createdAt = createdAt;
        this.lastUsed = lastUsed;
        this.automaticExport = automaticExport;
    }

    private getSecret(): Secret {
        let secret = new Secret(this.id);
        secret.id = this.secret_id;
        return secret;
    }

    private getIntegrationHandler(): AbstractIntegrationHandler {
        return IntegrationHandlerFactory.getIntegration(this.id, this.getSecret());
    }

    sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        return this.getIntegrationHandler().sendInvoice(collector, remote_id, invoice);
    }

    sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        return this.getIntegrationHandler().sendNotificationDisconnected(collector, credential_id, user_id, remote_id);
    }
}
