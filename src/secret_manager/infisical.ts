import { InfisicalSDK } from '@infisical/sdk'
import { AbstractSecretManager, Secret } from "./abstractSecretManager";
import * as utils from "../utils";

export class Infisical extends AbstractSecretManager {

    clientId: string;
    clientSecret: string;
    projectId: string;
    client: InfisicalSDK;
    env: string;

    constructor() {
        super();
        this.clientId = utils.getEnvVar("SECRET_MANAGER_INFISICAL_CLIENT_ID");
        this.clientSecret = utils.getEnvVar("SECRET_MANAGER_INFISICAL_CLIENT_SECRET");
        this.projectId = utils.getEnvVar("SECRET_MANAGER_INFISICAL_PROJECT_ID");
        this.env = utils.getEnvVar("SECRET_MANAGER_INFISICAL_ENV");
        this.client = new InfisicalSDK({
            siteUrl: utils.getEnvVar("SECRET_MANAGER_INFISICAL_API_URI")
        });
        this.connect();
    }

    async connect(): Promise<void> {
        try {
            // Authenticate with Infisical
            await this.client.auth().universalAuth.login({
                clientId: this.clientId,
                clientSecret: this.clientSecret
            });
            console.log("Connected successfully to Infisical");
        }
        catch (err) {
            console.error("Connection to Infisical failed", err);
        }
    }

    // SECRETS

    async addSecret(key: string, params: any): Promise<string> {
        //JSON param before sending
        const stringParams: string = JSON.stringify(params);        
        var createdSecret = await this.client.secrets().createSecret(key, {
            projectId: this.projectId,
            secretValue: stringParams,
            environment: this.env,
            secretPath:  "/",
        });
        return createdSecret.approval.id;
    }

    async getSecret(id: string): Promise<any | null> {
        try {
            const secret = await this.client.secrets().getSecret({
                projectId: this.projectId,
                secretName: id,
                environment: this.env,
                secretPath: "/",
              });
            return JSON.parse(secret.secretValue);
        }
        catch (err) {
            if (err instanceof Error && err.message.includes("[404 Not Found]")) {
                return null;
            }
            throw err;
        }
    }

    async deleteSecret(id: string): Promise<void> {
        await this.deleteSecrets([id]);
    }

    async deleteSecrets(ids: string[]): Promise<void> {
        try {
            for (const secretName of ids) {
                try {
                  await this.client.secrets().deleteSecret(secretName, {
                    projectId: this.projectId,
                    environment: this.env,
                    secretPath: "/"
                  });
                  console.log(`Secret "${secretName}" deleted.`);
                } catch (error) {
                  console.error(`Error deleting "${secretName}":`, error);
                }
              }
        }
        catch (err) {
            if (!(err instanceof Error && err.message.includes("[404 Not Found]"))) {
                throw err;
            }
        }
    }

    async updateSecret(id: string, key: string, secret: Secret): Promise<string> {
        const stringParams: string = JSON.stringify(secret);
        const updatedSecret = await this.client.secrets().updateSecret(id, {
            projectId: this.projectId,
            secretValue: stringParams,
            environment: this.env,
            secretPath: "/"
        });
        return updatedSecret.approval.id;
    }
}
