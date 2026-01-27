import { Secret } from "../model/secret";

export abstract class AbstractSecretManager {
    constructor() {
        if (new.target === AbstractSecretManager) {
            throw new TypeError("Cannot construct AbstractSecretManager instances directly");
        }
    }

    abstract connect(): Promise<void>;

    abstract disconnect(): Promise<void>;

    // SECRETS

    abstract getValue(id: string): Promise<any>;

    abstract createSecret(secret: Secret): Promise<Secret>;

    abstract updateSecret(secret: Secret): Promise<void>;

    abstract deleteSecret(id: string): Promise<void>;

    abstract deleteSecrets(ids: string[]): Promise<void>;
}
