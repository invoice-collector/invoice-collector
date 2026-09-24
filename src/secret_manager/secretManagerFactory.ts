import { AbstractSecretManager } from './abstractSecretManager';
import * as utils from '../utils';


export class SecretManagerFactory {
    static instance: AbstractSecretManager;

    /**
     * Get the currently loaded secret manager instance.
     * @returns The currently loaded secret manager instance.
     */
    static getSecretManager(): AbstractSecretManager {
        if (!SecretManagerFactory.instance) {
            throw new Error('SecretManager not loaded. Call load() first.');
        }
        return SecretManagerFactory.instance;
    }

    /**
     * Loads the secret manager instance if it hasn't been loaded yet.
     * @returns The loaded secret manager instance.
     */
    static async load(): Promise<AbstractSecretManager> {
        if (!SecretManagerFactory.instance) {
            const type = utils.getEnvVar('SECRET_MANAGER_TYPE');
            switch(type) {
                case 'bitwarden':
                    const { BitwardenSecretManager } = await import('./bitwardenSecretManager');
                    SecretManagerFactory.instance = new BitwardenSecretManager();
                    break;
                case 'mock':
                    const { MockSecretManager } = await import('./mockSecretManager');
                    SecretManagerFactory.instance = new MockSecretManager();
                    break;
                default:
                    throw new Error(`Unknown secret manager type: ${type}`);
            }
        }
        return SecretManagerFactory.instance;
    }
}
