import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { Secret } from "../model/secret";

export abstract class AbstractIntegrationHandler {

    mandatoryParams: string[];
    secret: Secret;

    constructor(mandatoryParams: string[], secret: Secret) {
        this.mandatoryParams = mandatoryParams;
        this.secret = secret;
    }

    async checkMandatoryParams(params: Record<string, any>): Promise<void> {
        for (const param of this.mandatoryParams) {
            if (!params[param]) {
                throw new Error(`Mandatory parameter ${param} not defined in integration secret parameters`);
            }
        }
    }

    abstract sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void>;
    abstract sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void>;
}
