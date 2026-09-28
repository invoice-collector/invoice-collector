import { AbstractSecretManager } from './abstractSecretManager';
import { Secret } from '../model/secret';

export class MockSecretManager extends AbstractSecretManager {

    /**
     * Constructs an instance of the MockSecretManager class.
     * The goal of this mock implementation is to provide a simple in-memory secret manager for testing purposes.
     */
    constructor() {
        super();
    }

    /**
     * @inheritdoc
     */
    async connect(): Promise<void> {}

    /**
     * @inheritdoc
     */
    async disconnect(): Promise<void> {}

    /**
     * @inheritdoc
     */
    async ping(): Promise<void> {
        console.warn('No secret manager configured. Cannot ping.');
    }

    // SECRETS

    /**
     * @inheritdoc
     */
    async getValue(id: string): Promise<any> {
        return { mockKey: 'mockValue' };
    }

    /**
     * @inheritdoc
     */
    async createSecret(secret: Secret): Promise<Secret> {
        secret.id = 'mockId';
        return secret;
    }

    /**
     * @inheritdoc
     */
    async updateSecret(secret: Secret): Promise<void> {}

    /**
     * @inheritdoc
     */
    async deleteSecret(id: string): Promise<void> {}

    /**
     * @inheritdoc
     */
    async deleteSecrets(ids: string[]): Promise<void> {}
}
