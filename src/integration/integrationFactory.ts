import { Secret } from '../model/secret';
import { AbstractIntegration } from './abstractIntegration';
import { SageIntegration } from './sageIntegration';
import { PennylaneIntegration } from './pennylaneIntegration';
import { AxonautIntegration } from './axonautIntegration';
import { TiimeIntegration } from './tiimeIntegration';
import { ChaintrustIntegration } from './chaintrustIntegration';
import { InqomIntegration } from './inqomIntegration';
import { MegIntegration } from './megIntegration';
import { HttpIntegration } from './httpIntegration';
import { FileSystemIntegration } from './fileSystemIntegration';

export class IntegrationFactory {

    /**
     * Gets an instance of the integration corresponding to the given ID.
     * @param id The ID of the integration.
     * @param secret The secrets for the integration.
     * @returns An instance of the corresponding integration.
     */
    static getIntegration(id: string, secret: Secret): AbstractIntegration {
        switch (id) {
            case 'sage':
                return new SageIntegration(secret);
            case 'pennylane':
                return new PennylaneIntegration(secret);
            case 'axonaut':
                return new AxonautIntegration(secret);
            case 'tiime':
                return new TiimeIntegration(secret);
            case 'chaintrust':
                return new ChaintrustIntegration(secret);
            case 'inqom':
                return new InqomIntegration(secret);
            case 'meg':
                return new MegIntegration(secret);
            case 'http':
                return new HttpIntegration(secret);
            case 'filesystem':
                return new FileSystemIntegration(secret);
            default:
                throw new Error(`Integration ${id} not found`);
        }
    }
}
