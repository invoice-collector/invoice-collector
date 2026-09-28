import { AbstractProxy, Location, Proxy } from './abstractProxy';

export class NoProxy extends AbstractProxy {

    /**
     * Gets a proxy for the specified location.
     * @param location The location for which to get a proxy.
     * @returns A Proxy instance for the specified location, or null if no proxy is available.
     */
    async get(location: Location | null): Promise<Proxy | null> {
        return null;
    }
}
