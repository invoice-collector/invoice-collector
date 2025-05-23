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
            await this.client.auth().universalAuth.login({
                clientId: this.clientId,
                clientSecret: this.clientSecret
            });
            console.log("[Infisical] Connected successfully");
        }
        catch (err) {
            console.error("[Infisical] Connection failed:", err);
        }
    }

    // SECRETS

    async addSecret(key: string, params: any): Promise<string> {
        const stringParams: string = JSON.stringify(params);        
        try {
            const createdSecret = await this.client.secrets().createSecret(key, {
                projectId: this.projectId,
                secretValue: stringParams,
                environment: this.env,
                secretPath:  "/",
            });
            if (!createdSecret?.secret?.secretKey) {
                throw new Error("Infisical: createdSecret.secret.secretKey is undefined");
            }
            return createdSecret.secret.secretKey;
        } catch (err) {
            console.error("[Infisical] Error creating secret:", err);
            throw err;
        }
    }

    async getSecret(id: string): Promise<any | null> {
        try {
            const secret = await this.client.secrets().getSecret({
                projectId: this.projectId,
                secretName: id,
                environment: this.env,
                secretPath: "/",
            });
            if (!secret?.secretValue) {
                return null;
            }
            return JSON.parse(secret.secretValue);
        }
        catch (err) {
            if (err instanceof Error && err.message.includes("[404 Not Found]")) {
                return null;
            }
            console.error("[Infisical] Error getting secret:", err);
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
                } catch (error) {
                    if (!(error instanceof Error && error.message.includes("[404 Not Found]"))) {
                        console.error(`[Infisical] Error deleting secret:`, error);
                    }
                }
            }
        }
        catch (err) {
            if (!(err instanceof Error && err.message.includes("[404 Not Found]"))) {
                console.error("[Infisical] Error in deleteSecrets:", err);
                throw err;
            }
        }
    }

    async updateSecret(id: string, key: string, secret: Secret): Promise<string> {
        const stringParams: string = JSON.stringify(secret);
        try {
            const updatedSecret = await this.client.secrets().updateSecret(id, {
                projectId: this.projectId,
                secretValue: stringParams,
                environment: this.env,
                secretPath: "/"
            });
            if (!updatedSecret?.secret?.secretKey) {
                throw new Error("Infisical: updatedSecret.secret.secretKey is undefined");
            }
            return updatedSecret.secret.secretKey;
        } catch (err) {
            console.error("[Infisical] Error updating secret:", err);
            throw err;
        }
    }
}
