export type Secret = {
    params: any,
    cookies: any,
}

export abstract class AbstractSecretManager {
    constructor() {
        if (new.target === AbstractSecretManager) {
            throw new TypeError("Cannot construct AbstractSecretManager instances directly");
        }
    }

    abstract connect(): Promise<void>;

    /*abstract disconnect(): Promise<void>;*/

    // SECRETS

    abstract addSecret(key: string, secret: Secret): Promise<string>;

    abstract getSecret(id: string): Promise<Secret | null>;

    abstract updateSecret(id: string, key: string, secret: Secret): Promise<string>;

    abstract deleteSecret(id: string): Promise<void>;

    abstract deleteSecrets(ids: string[]): Promise<void>;
}
