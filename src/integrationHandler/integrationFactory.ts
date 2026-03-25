import { Secret } from "../model/secret";
import { AbstractIntegrationHandler } from "./abstractIntegrationHandler";
import { HttpIntegrationHandler } from "./httpIntegrationHandler";

class IntegrationHandlerFactory {
    static getIntegration(name: string, secret: Secret): AbstractIntegrationHandler {
        switch (name) {
            case "http":
                return new HttpIntegrationHandler(secret);
            default:
                throw new Error(`Integration ${name} not found`);
        }
    }
}

export { IntegrationHandlerFactory };
