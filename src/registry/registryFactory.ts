import { AbstractRegistry } from './abstractRegistry';
import { HttpRegistry } from './httpRegistry';
import { MockRegistry } from './mockRegistry';
import * as utils from '../utils';

export class RegistryFactory {
    static instance: AbstractRegistry;

    static getInstance(): AbstractRegistry {
        if (!RegistryFactory.instance) {
            const registryServerEndpoint = utils.getEnvVar("REGISTRY_SERVER_ENDPOINT", "");
            if (typeof registryServerEndpoint === 'string' && registryServerEndpoint.startsWith('http')) {
                RegistryFactory.instance = new HttpRegistry(registryServerEndpoint);
            } else {
                RegistryFactory.instance = new MockRegistry();
            }
        }
        return RegistryFactory.instance;
    }
}
