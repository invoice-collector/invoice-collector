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
        lon: '2.348993'
    }

    abstract get(location: Location | null): Promise<Proxy | null>;

    async locate(ip: string | undefined): Promise<Location | null> {
        // Check if exists
        if (ip) {
            return this._locate(ip);
        }
        return null;
    }

    private async _locate(ip: string): Promise<Location | null> {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        if (!response.ok) {
            return null;
        }
        const json = await response.json();
        if(json.status === "fail") {
            return null;
        }
        return {
            country: json.countryCode,
            lat: json.lat,
            lon: json.lon
        }
    }
}
