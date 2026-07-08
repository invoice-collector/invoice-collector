import { AbstractSecretManager } from './abstractSecretManager';
import * as utils from "../utils";


export class SecretManagerFactory {
    static instance: AbstractSecretManager;

    static getSecretManager(): AbstractSecretManager {
        if (!SecretManagerFactory.instance) {
            throw new Error("SecretManager not loaded. Call load() first.");
        }
        return SecretManagerFactory.instance;
    }

    static async load(): Promise<AbstractSecretManager> {
        if (!SecretManagerFactory.instance) {
            const type = utils.getEnvVar("SECRET_MANAGER_TYPE");
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
