import { Secret } from "../model/secret";
import { AbstractIntegration } from "./abstractIntegration";
import { HttpIntegration } from "./httpIntegration";

class IntegrationFactory {
    static getIntegration(name: string, secret: Secret): AbstractIntegration {
        switch (name) {
            case "http":
                return new HttpIntegration(secret);
            default:
                throw new Error(`Integration ${name} not found`);
        }
    }
}

export { IntegrationFactory };
