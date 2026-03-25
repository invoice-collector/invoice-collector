import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { Secret } from "../model/secret";

export abstract class AbstractIntegrationHandler {

    secret: Secret;

    constructor(secret: Secret) {
        this.secret = secret;
    }

    abstract sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void>;
    abstract sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void>;
}
