import { Secret } from "../model/secret";
import { AbstractIntegrationHandler } from "./abstractIntegrationHandler";
import { HttpIntegrationHandler } from "./httpIntegrationHandler";

class IntegrationHandlerFactory {
    static getIntegration(id: string, secret: Secret): AbstractIntegrationHandler {
        switch (id) {
            case "http":
                return new HttpIntegrationHandler(secret);
            default:
                throw new Error(`Integration ${id} not found`);
        }
    }
}

export { IntegrationHandlerFactory };
