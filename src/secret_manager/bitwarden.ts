import { BitwardenClient, ClientSettings, DeviceType, LogLevel } from "@bitwarden/sdk-napi";
import { AbstractSecretManager } from "./abstractSecretManager";
import * as utils from "../utils";
import { Secret } from "../model/secret";

export class Bitwarden extends AbstractSecretManager {

    static stateFile: string = "./bitwarden/state";

    accessToken: string;
    organizationId: string;
    projectId: string;
    client: BitwardenClient;

    constructor() {
        super();
        this.accessToken = utils.getEnvVar("SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN");
        this.organizationId = utils.getEnvVar("SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID");
        this.projectId = utils.getEnvVar("SECRET_MANAGER_BITWARDEN_PROJECT_ID");
        const settings: ClientSettings = {
            apiUrl: utils.getEnvVar("SECRET_MANAGER_BITWARDEN_API_URI"),
            identityUrl: utils.getEnvVar("SECRET_MANAGER_BITWARDEN_IDENTITY_URI"),
            userAgent: "Bitwarden SDK",
            deviceType: DeviceType.SDK,
        };
        this.client = new BitwardenClient(settings, 2);
        this.connect();
    }

    async connect(): Promise<void> {
        try {
            await this.client.auth().loginAccessToken(this.accessToken, Bitwarden.stateFile);
            console.log("Connected successfully to Bitwarden");
        }
        catch (err) {
            console.error("Connection to Bitwarden failed", err);
        }
    }

    async disconnect(): Promise<void> {
        // No explicit disconnect method in Bitwarden SDK
    }

    // SECRETS

    async getValue(id: string): Promise<any> {
        try {
            const secret = await this.client.secrets().get(id);
            // Parse JSON secret before returning
            return JSON.parse(secret.value);
        }
        catch (err) {
            throw new Error(`Failed to get secret ${id}`, { cause: err });
        }
    }

    async createSecret(secret: Secret): Promise<Secret> {
        try {
            // JSON secret before sending
            const secretValue: string = JSON.stringify(secret.value);
            secret.id = (await this.client.secrets().create(this.organizationId, secret.key, secretValue, "", [this.projectId])).id;
            return secret;
        }
        catch (err) {
            throw new Error(`Failed to create secret ${secret.key}`, { cause: err });
        }
    }

    async updateSecret(secret: Secret): Promise<void> {
        try {
            // JSON secret before sending
            const secretValue: string = JSON.stringify(secret.value);
            await this.client.secrets().update(this.organizationId, secret.id, secret.key, secretValue, "", [this.projectId]);
        }
        catch (err) {
            throw new Error(`Failed to update secret ${secret.id}`, { cause: err });
        }
    }

    async deleteSecret(id: string): Promise<void> {
        await this.deleteSecrets([id]);
    }

    async deleteSecrets(ids: string[]): Promise<void> {
        try {
            await this.client.secrets().delete(ids);
        }
        catch (err) {
            throw new Error(`Failed to delete secrets ${ids}`, { cause: err });
        }
    }
}
