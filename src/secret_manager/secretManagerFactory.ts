import { Bitwarden } from './bitwarden';
import { Infisical } from './infisical';
import { AbstractSecretManager } from './abstractSecretManager';
import * as utils from "../utils";

export class SecretManagerFactory {
    static instance: AbstractSecretManager;

    static getSecretManager(): AbstractSecretManager {
        if (!SecretManagerFactory.instance) {
            const type = utils.getEnvVar("SECRET_MANAGER_TYPE");
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
