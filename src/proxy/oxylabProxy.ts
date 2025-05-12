import { AbstractProxy, Proxy, Location } from "./abstractProxy";
import * as utils from "../utils";
import axios from "axios";
import { HttpsProxyAgent } from 'https-proxy-agent';

export class OxylabProxy extends AbstractProxy {

    static OXYLAB_HOST = "pr.oxylabs.io";
    static OXYLAB_PORT = 7777;

    static RADIUS_ACCURACIES = [1, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 500, 1000, 2000]; // in miles
    static LOCATION_URL = "https://ip.oxylabs.io/location";

    username: string;
    password: string;

    constructor() {
        super();
        this.username = utils.getEnvVar("PROXY_OXYLAB_USERNAME");
        this.password = utils.getEnvVar("PROXY_OXYLAB_PASSWORD");
    }

    async get(location: Location | null): Promise<Proxy | null> {
        if(location == null) {
            console.log("Location is unknown, using default location");
            location = AbstractProxy.DEFAULT_LOCATION
        }

        const sessid = new Date().getTime().toString();
        const proxy: Proxy = {
            uri: `http://customer-${this.username}-cc-${location.country}-sessid-${sessid}:${this.password}@${OxylabProxy.OXYLAB_HOST}:${OxylabProxy.OXYLAB_PORT}`,
            host: OxylabProxy.OXYLAB_HOST,
            port: OxylabProxy.OXYLAB_PORT,
            username: `customer-${this.username}-cc-${location.country}-sessid-${sessid}`,
            password: this.password
        };
        await this.geoConstrain(proxy, location);
        return proxy;
    }

    /**
     * Ensures that the provided proxy can be constrained to specific coordinates
     * by making a test request to a predefined location URL.
     *
     * @param proxy - The proxy configuration object containing the URI to be tested.
     * @throws {Error} Throws an error with a cause if the proxy cannot be constrained to the specified coordinates.
     */
    async geoConstrain(proxy: Proxy, location: Location): Promise<void> {
        for (const radius of OxylabProxy.RADIUS_ACCURACIES) {
            try {
                await axios.get(OxylabProxy.LOCATION_URL, {
                    httpsAgent: new HttpsProxyAgent(proxy.uri, {
                        headers: {
                            "X-Oxylabs-Geolocation": `${location.lat}:${location.lon};${radius}`
                        }
                    })
                });
                return;
            } catch (error) {
                // Nothing to do, just try the next radius
            }
        }
        // If we reach here, it means that all radius attempts failed
         console.warn("Cannot geo-constrain proxy");
    }
}
