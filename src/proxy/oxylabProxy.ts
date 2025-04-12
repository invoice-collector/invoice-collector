import { AbstractProxy, Proxy, Location } from "./abstractProxy";
import * as utils from "../utils";

export class OxylabProxy extends AbstractProxy {

    static RADIUS_ACCURACIES = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]

    username: string;
    password: string;

    constructor() {
        super();
        this.username = utils.getEnvVar("PROXY_OXYLAB_USERNAME");
        this.password = utils.getEnvVar("PROXY_OXYLAB_PASSWORD");
    }

    get(location: Location | null): Proxy | null {
        if(location == null) {
            console.log("Location is unknown, using default location");
            location = AbstractProxy.DEFAULT_LOCATION
        }

        return {
            uri: `http://customer-${this.username}-cc-${location.country}:${this.password}@pr.oxylabs.io:7777`,
            host: "pr.oxylabs.io",
            port: 7777,
            username: `customer-${this.username}-cc-${location.country}`,
            password: this.password
        };
    }
}
