import { InfisicalSDK } from '@infisical/sdk'
import { AbstractSecretManager } from "./abstractSecretManager";

export class Infisical extends AbstractSecretManager {

    clientId: string;
    clientSecret: string;
    projectId: string;
    client: InfisicalSDK;
    env: string;

    constructor() {
        if (!process.env.SECRET_MANAGER_INFISICAL_API_URI) {
            throw new Error("SECRET_MANAGER_INFISICAL_API_URI environment variable is required");
        }
        if (!process.env.SECRET_MANAGER_INFISICAL_CLIENT_ID) {
            throw new Error("SECRET_MANAGER_INFISICAL_CLIENT_ID environment variable is required");
        }
        if (!process.env.SECRET_MANAGER_INFISICAL_CLIENT_SECRET) {
            throw new Error("SECRET_MANAGER_INFISICAL_CLIENT_SECRET environment variable is required");
        }
        if (!process.env.SECRET_MANAGER_INFISICAL_PROJECT_ID) {
            throw new Error("SECRET_MANAGER_INFISICAL_PROJECT_ID environment variable is required");
        }
        if (!process.env.SECRET_MANAGER_INFISICAL_ENV) {
            throw new Error("SECRET_MANAGER_INFISICAL_ENV environment variable is required");
        }

        super();
        this.clientId = process.env.SECRET_MANAGER_INFISICAL_CLIENT_ID || "";
        this.clientSecret = process.env.SECRET_MANAGER_INFISICAL_CLIENT_SECRET || "";
        this.projectId = process.env.SECRET_MANAGER_INFISICAL_PROJECT_ID || "";
        this.env = process.env.SECRET_MANAGER_INFISICAL_ENV || "";
        this.client = new InfisicalSDK({
            siteUrl: process.env.SECRET_MANAGER_INFISICAL_API_URI
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
            console.log("Connected successfully to iNFISICAL");
        }
        catch (err) {
            console.error("Connection to Bitwarden failed", err);
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
}
