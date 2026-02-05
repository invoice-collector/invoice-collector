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
                    const { Bitwarden } = await import('./bitwarden');
                    SecretManagerFactory.instance = new Bitwarden();
                    break;
                case 'mock':
                    const { Mock } = await import('./mock');
                    SecretManagerFactory.instance = new Mock();
                    break;
                default:
                    throw new Error(`Unknown secret manager type: ${type}`);
            }
        }
        return SecretManagerFactory.instance;
    }
}
