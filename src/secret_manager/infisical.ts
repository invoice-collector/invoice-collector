import { AbstractSecretManager, Secret } from "./abstractSecretManager";
import * as utils from "../utils";
import { InfisicalSDK, SecretType } from "@infisical/sdk";

type InfisicalSecretResponse = {
    secretName: string,
    secretValue: string,
    secretComment?: string,
    version?: number,
    id?: string
}

export class Infisical extends AbstractSecretManager {

    apiUrl: string;
    token: string;
    projectId: string;
    environment: string;
    path: string;
    client: InfisicalSDK;
    private connectionReady: Promise<void>;
    private ensuredPath: boolean = false;

    constructor() {
        super();
        this.apiUrl = utils.getEnvVar("SECRET_MANAGER_INFISICAL_API_URI");
        this.token = utils.getEnvVar("SECRET_MANAGER_INFISICAL_TOKEN");
        this.projectId = utils.getEnvVar("SECRET_MANAGER_INFISICAL_PROJECT_ID");
        this.environment = utils.getEnvVar("SECRET_MANAGER_INFISICAL_ENVIRONMENT");
        this.path = utils.getEnvVar("SECRET_MANAGER_INFISICAL_PATH", "/");
        this.client = new InfisicalSDK({ siteUrl: this.apiUrl });
        // Set access token for SDK
        this.client.auth().accessToken(this.token);
        this.connectionReady = this.connect();
    }

    async connect(): Promise<void> {
        try {
            // Lightweight connectivity check: list one variable (SDK)
            await this.client.secrets().listSecrets({
                projectId: this.projectId,
                environment: this.environment,
                secretPath: this.path
            });
            console.log("Connected successfully to Infisical");
        }
        catch (err) {
            throw new Error("Connection to Infisical failed", { cause: err as Error });
        }
    }

    // SECRETS

    async addSecret(key: string, secret: Secret): Promise<string> {
        try {
            await this.connectionReady;
            await this.ensureFolderIfNeeded();
            const stringSecret: string = JSON.stringify(secret);
            await this.client.secrets().createSecret(key, {
                projectId: this.projectId,
                environment: this.environment,
                secretPath: this.path,
                type: SecretType.Shared,
                secretValue: stringSecret,
                skipMultilineEncoding: true
            });
            // Infisical identifies by name+path; we compose an id consistent for later retrieval
            return this.composeId(key);
        }
        catch (err) {
            throw new Error(`Failed to add secret ${key}`, { cause: err as Error });
        }
    }

    async getSecret(id: string): Promise<Secret | null> {
        try {
            await this.connectionReady;
            const { key } = this.parseId(id);
            const res = await this.client.secrets().getSecret({
                projectId: this.projectId,
                environment: this.environment,
                secretPath: this.path,
                secretName: key,
                type: SecretType.Shared
            });
            const value = (res as any)?.secretValue ?? (res as any)?.secret?.secretValue;
            if (value == null) {
                return null;
            }
            return JSON.parse(value);
        }
        catch (err) {
            if (this.isNotFoundError(err)) {
                return null;
            }
            throw new Error(`Failed to get secret ${id}`, { cause: err as Error });
        }
    }

    async updateSecret(id: string, key: string, secret: Secret): Promise<string> {
        try {
            await this.connectionReady;
            const stringSecret: string = JSON.stringify(secret);
            await this.client.secrets().updateSecret(key, {
                projectId: this.projectId,
                environment: this.environment,
                secretPath: this.path,
                secretValue: stringSecret,
                type: SecretType.Shared,
                skipMultilineEncoding: true
            });
            return this.composeId(key);
        }
        catch (err) {
            throw new Error(`Failed to update secret ${id}`, { cause: err as Error });
        }
    }

    async deleteSecret(id: string): Promise<void> {
        await this.deleteSecrets([id]);
    }

    async deleteSecrets(ids: string[]): Promise<void> {
        try {
            await this.connectionReady;
            const secretNames = ids.map((id) => this.parseId(id).key);
            await Promise.all(secretNames.map((name) => this.client.secrets().deleteSecret(name, {
                projectId: this.projectId,
                environment: this.environment,
                secretPath: this.path,
                type: SecretType.Shared
            })));
        }
        catch (err) {
            throw new Error(`Failed to delete secrets ${ids}`, { cause: err as Error });
        }
    }

    private composeId(key: string): string {
        // Stable identifier within Infisical namespace
        return `${this.projectId}:${this.environment}:${this.path}:${key}`;
    }

    private parseId(id: string): { key: string } {
        const parts = id.split(":");
        const key = parts.slice(3).join(":");
        return { key };
    }

    private isNotFoundError(err: unknown): boolean {
        const anyErr = err as any;
        return anyErr?.status === 404 || anyErr?.response?.status === 404 || anyErr?.code === 404 || anyErr?.code === "NotFound";
    }

    private async ensureFolderIfNeeded(): Promise<void> {
        if (this.ensuredPath) {
            return;
        }
        if (!this.path || this.path === "/") {
            this.ensuredPath = true;
            return;
        }
        const segments = this.path.split('/').filter(Boolean);
        if (segments.length === 0) {
            this.ensuredPath = true;
            return;
        }
        const name = segments[segments.length - 1];
        const parent = '/' + segments.slice(0, -1).join('/');
        try {
            await this.client.folders().listFolders({
                environment: this.environment,
                projectId: this.projectId,
                path: this.path,
                recursive: false
            });
            this.ensuredPath = true;
        } catch (err) {
            const anyErr = err as any;
            if (anyErr?.response?.status === 404 || anyErr?.status === 404) {
                await this.client.folders().create({
                    name,
                    path: parent === '//' ? '/' : (parent || '/'),
                    projectId: this.projectId,
                    environment: this.environment
                });
                this.ensuredPath = true;
                return;
            }
            throw err;
        }
    }
}


