import { BitwardenClient, ClientSettings, DeviceType, LogLevel } from "@bitwarden/sdk-napi";
import { AbstractSecretManager } from "./abstractSecretManager";
import * as utils from "../utils";

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

    // SECRETS

    async addSecret(key: string, params: any): Promise<string> {
        //JSON param before sending
        const stringParams: string = JSON.stringify(params);
        return (await this.client.secrets().create(this.organizationId, key, stringParams, "", [this.projectId])).id;
    }

    async getSecret(id: string): Promise<any | null> {
        try {
            const secret = await this.client.secrets().get(id);
            return JSON.parse(secret.value);
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
            await this.client.secrets().delete(ids);
        }
        catch (err) {
            if (!(err instanceof Error && err.message.includes("[404 Not Found]"))) {
                throw err;
            }
        }
    }
}
