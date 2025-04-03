import { Bitwarden } from './bitwarden';
import { Infisical } from './infisical';
import { AbstractSecretManager } from './abstractSecretManager';

export class SecretManagerFactory {
    static instance: AbstractSecretManager;

    static getSecretManager(): AbstractSecretManager {
        if (!SecretManagerFactory.instance) {
            const type = process.env.SECRET_MANAGER_TYPE;
            switch(type) {
                case 'bitwarden':
                    SecretManagerFactory.instance = new Bitwarden();
                break;
                case 'infisical':
                    SecretManagerFactory.instance = new Infisical();
                    break;
                default:
                    throw new Error(`Unknown secret manager type: ${type}`);
            }
        }
        return SecretManagerFactory.instance;
    }
}
