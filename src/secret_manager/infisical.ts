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
        console.log("[Infisical] Constructor: clientId=", this.clientId, "projectId=", this.projectId, "env=", this.env);
        this.client = new InfisicalSDK({
            siteUrl: utils.getEnvVar("SECRET_MANAGER_INFISICAL_API_URI")
        });
        this.connect();
    }

    async connect(): Promise<void> {
        try {
            console.log("[Infisical] Connecting to Infisical...");
            await this.client.auth().universalAuth.login({
                clientId: this.clientId,
                clientSecret: this.clientSecret
            });
            console.log("[Infisical] Connected successfully to Infisical");
        }
        catch (err) {
            console.error("[Infisical] Connection to Infisical failed", err);
        }
    }

    // SECRETS

    async addSecret(key: string, params: any): Promise<string> {
        console.log("[Infisical] addSecret called with key:", key, "params:", params);
        //JSON param before sending
        const stringParams: string = JSON.stringify(params);        
        console.log("[Infisical] addSecret stringParams:", stringParams);
        var createdSecret;
        try {
            createdSecret = await this.client.secrets().createSecret(key, {
                projectId: this.projectId,
                secretValue: stringParams,
                environment: this.env,
                secretPath:  "/",
            });
            console.log("[Infisical] addSecret createdSecret:", createdSecret);
        } catch (err) {
            console.error("[Infisical] Error in createSecret:", err);
            throw err;
        }
        if (!createdSecret || !createdSecret.secret || !createdSecret.secret.secretKey) {
            console.error("[Infisical] createdSecret.secret.secretKey is undefined. Response:", createdSecret);
            throw new Error("Infisical: createdSecret.secret.secretKey is undefined. Response: " + JSON.stringify(createdSecret));
        }
        console.log("[Infisical] addSecret returning secretKey:", createdSecret.secret.secretKey);
        return createdSecret.secret.secretKey;
    }

    async getSecret(id: string): Promise<any | null> {
        console.log("[Infisical] getSecret called with id:", id);
        try {
            const secret = await this.client.secrets().getSecret({
                projectId: this.projectId,
                secretName: id,
                environment: this.env,
                secretPath: "/",
            });
            console.log("[Infisical] getSecret result:", secret);
            if (!secret || !secret.secretValue) {
                console.error("[Infisical] getSecret: secret or secretValue is undefined");
                return null;
            }
            return JSON.parse(secret.secretValue);
        }
        catch (err) {
            console.error("[Infisical] Error in getSecret:", err);
            if (err instanceof Error && err.message.includes("[404 Not Found]")) {
                return null;
            }
            throw err;
        }
    }

    async deleteSecret(id: string): Promise<void> {
        console.log("[Infisical] deleteSecret called with id:", id);
        await this.deleteSecrets([id]);
    }

    async deleteSecrets(ids: string[]): Promise<void> {
        console.log("[Infisical] deleteSecrets called with ids:", ids);
        try {
            for (const secretName of ids) {
                try {
                  await this.client.secrets().deleteSecret(secretName, {
                    projectId: this.projectId,
                    environment: this.env,
                    secretPath: "/"
                  });
                  console.log(`[Infisical] Secret "${secretName}" deleted.`);
                } catch (error) {
                  console.error(`[Infisical] Error deleting "${secretName}":`, error);
                }
              }
        }
        catch (err) {
            console.error("[Infisical] Error in deleteSecrets:", err);
            if (!(err instanceof Error && err.message.includes("[404 Not Found]"))) {
                throw err;
            }
        }
    }

    async updateSecret(id: string, key: string, secret: Secret): Promise<string> {
        console.log("[Infisical] updateSecret called with id:", id, "key:", key, "secret:", secret);
        const stringParams: string = JSON.stringify(secret);
        let updatedSecret;
        try {
            updatedSecret = await this.client.secrets().updateSecret(id, {
                projectId: this.projectId,
                secretValue: stringParams,
                environment: this.env,
                secretPath: "/"
            });
            console.log("[Infisical] updateSecret updatedSecret:", updatedSecret);
        } catch (err) {
            console.error("[Infisical] Error in updateSecret:", err);
            throw err;
        }
        if (!updatedSecret || !updatedSecret.secret || !updatedSecret.secret.secretKey) {
            console.error("[Infisical] updatedSecret.secret.secretKey is undefined. Response:", updatedSecret);
            throw new Error("Infisical: updatedSecret.secret.secretKey is undefined. Response: " + JSON.stringify(updatedSecret));
        }
        console.log("[Infisical] updateSecret returning secretKey:", updatedSecret.secret.secretKey);
        return updatedSecret.secret.secretKey;
    }
}
