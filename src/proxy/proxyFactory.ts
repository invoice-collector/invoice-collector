import { AbstractProxy } from './abstractProxy';
import { NoProxy } from './noProxy';
import { OxylabProxy } from './oxylabProxy';
import * as utils from '../utils';

export class ProxyFactory {

    /**
     * Gets an instance of the appropriate proxy based on the environment configuration.
     * @returns An instance of a class that extends AbstractProxy.
     */
    static getProxy(): AbstractProxy {
        const type = utils.getEnvVar('PROXY_TYPE', 'no_proxy');
        switch(type) {
            case 'oxylab':
                return new OxylabProxy();
            default:
                return new NoProxy();
        }
    }
}
