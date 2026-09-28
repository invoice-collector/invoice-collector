export type Proxy = {
    uri: string,
    host: string,
    port: number,
    username?: string,
    password?: string
}

export type Location = {
    country: string;
    lat: string;
    lon: string;
};

export abstract class AbstractProxy {

    static DEFAULT_LOCATION: Location = {
        country: 'FR',
        lat: '48.853264',
        lon: '2.348993',
    };

    /**
     * Gets a proxy for the specified location.
     * @param location The location for which to get a proxy.
     * @returns A Proxy instance for the specified location, or null if no proxy is available.
     */
    abstract get(location: Location | null): Promise<Proxy | null>;

    /**
     * Gets the geographical location for the specified IP address.
     * @param ip The IP address for which to get the location.
     * @returns A Location instance for the specified IP address, or null if the location cannot be determined.
     */
    async locate(ip: string | undefined): Promise<Location | null> {
        // TODO merge _local and local methods
        // Check if exists
        if (ip) {
            return this._locate(ip);
        }
        return null;
    }

    /**
     * Gets the geographical location for the specified IP address.
     * @param ip The IP address for which to get the location.
     * @returns A Location instance for the specified IP address, or null if the location cannot be determined.
     */
    private async _locate(ip: string): Promise<Location | null> {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        if (!response.ok) {
            return null;
        }
        const json = await response.json();
        if(json.status === 'fail') {
            return null;
        }
        return {
            country: json.countryCode,
            lat: json.lat,
            lon: json.lon,
        };
    }
}
