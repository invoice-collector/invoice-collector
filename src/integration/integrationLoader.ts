import { IntegrationConfig } from "./abstractIntegration";
import { HttpIntegration } from "./httpIntegration";

const INTEGRATIONS: {
    [key: string]: IntegrationConfig
} = {
    [HttpIntegration.CONFIG.id]:  HttpIntegration.CONFIG
}

export class IntegrationLoader {
    public static getAll(): IntegrationConfig[] {
        return Object.values(INTEGRATIONS);
    }

    static get(name: string): IntegrationConfig  {
        // Check if integration exists
        if(!INTEGRATIONS.hasOwnProperty(name)) {
            throw new Error(`Integration not found for name: ${name}`);
        }

        return INTEGRATIONS[name];
    }
}