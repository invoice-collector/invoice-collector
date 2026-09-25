import { SecretManagerFactory } from '../secret_manager/secretManagerFactory';

export class Secret {
    
    static DEFAULT_VALUE: {} = {};

    id: string;
    key: string;
    value: any;

    /**
     * Constructs a new Secret instance with the specified key and value.
     * @param key The key associated with the secret in the secret manager. //TODO rename it to "name" not to confuse with key-value pairs inside the secret.
     * @param value The value associated with the secret. Defaults to an empty object if not provided.
     */
    constructor(key: string, value: any = Secret.DEFAULT_VALUE) {
        this.id = '';
        this.key = key;
        this.value = value;
    }

    /**
     * Retrieves the value associated with the specified key from the secret.
     * If the secret is empty, it fetches the value from the secret manager first.
     * @param key The key identifying the value to retrieve.
     * @returns The value associated with the specified key.
     */
    private async getValue(key: string): Promise<any> {
        if (Object.keys(this.value).length === 0) {
            this.value = await SecretManagerFactory.getSecretManager().getValue(this.id);
        }
        return this.value[key];
    }

    /**
     * Gets the 'params' value from the secret.
     * @returns The value associated with the 'params' key.
     */
    async getParams(): Promise<any> {
        return this.getValue('params');
    }

    /**
     * Sets the 'params' value in the secret.
     * @param value The value to associate with the 'params' key.
     */
    async setParams(value: any) {
        this.value['params'] = value;
    }

    /**
     * Gets the 'cookies' value from the secret.
     * @returns The value associated with the 'cookies' key.
     */
    async getCookies(): Promise<any> {
        return this.getValue('cookies');
    }

    /**
     * Sets the 'cookies' value in the secret.
     * @param value The value to associate with the 'cookies' key.
     */
    async setCookies(value: any) {
        this.value['cookies'] = value;
    }

    /**
     * Gets the 'localStorage' value from the secret.
     * @returns The value associated with the 'localStorage' key.
     */
    async getLocalStorage(): Promise<any> {
        return this.getValue('localStorage');
    }

    /**
     * Sets the 'localStorage' value in the secret.
     * @param value The value to associate with the 'localStorage' key.
     */
    async setLocalStorage(value: any) {
        this.value['localStorage'] = value;
    }

    /**
     * Commits the current state of the secret to the secret manager.
     * Creates a new secret entry if it does not already exist.
     * Updates the existing entry otherwise.
     */
    async commit(): Promise<void> {
        // If the secret is not empty
        if(Object.keys(this.value).length > 0) {
            if (this.id) {
                // Update existing secret
                await SecretManagerFactory.getSecretManager().updateSecret(this);
            }
            else {
                // Create secret
                await SecretManagerFactory.getSecretManager().createSecret(this);
            }
        }
    }

    /**
     * Deletes the secret from the secret manager.
     */
    async delete(): Promise<void> {
        await SecretManagerFactory.getSecretManager().deleteSecret(this.id);
    }
}