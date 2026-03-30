import { CompleteInvoice, Config } from "../collectors/abstractCollector";
import { Secret } from "../model/secret";

export type IntegrationConfig = {
    id: string,
    name: string,
    description: string,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    }
}

export abstract class AbstractIntegration {

    config: IntegrationConfig;
    secret: Secret;

    constructor(config: IntegrationConfig, secret: Secret) {
        this.config = config;
        this.secret = secret;
    }

    async checkMandatoryParams(params: Record<string, any>): Promise<void> {
        for (const [param, paramConfig] of Object.entries(this.config.params)) {
            if (paramConfig.mandatory && !params[param]) {
                throw new Error(`Mandatory parameter ${param} not defined in integration secret parameters`);
            }
        }
    }

    abstract sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void>;
    abstract sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void>;
}
