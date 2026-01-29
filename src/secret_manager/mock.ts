import { AbstractSecretManager } from "./abstractSecretManager";
import { Secret } from "../model/secret";

export class Mock extends AbstractSecretManager {

    async connect(): Promise<void> {}

    async disconnect(): Promise<void> {}

    // SECRETS

    async getValue(id: string): Promise<any> {
        return { mockKey: "mockValue" };
    }

    async createSecret(secret: Secret): Promise<Secret> {
        secret.id = "mockId";
        return secret;
    }

    async updateSecret(secret: Secret): Promise<void> {}

    async deleteSecret(id: string): Promise<void> {}

    async deleteSecrets(ids: string[]): Promise<void> {}
}
