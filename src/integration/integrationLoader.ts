import { IntegrationConfig } from './abstractIntegration';
import { SageIntegration } from './sageIntegration';
import { PennylaneIntegration } from './pennylaneIntegration';
import { AxonautIntegration } from './axonautIntegration';
import { TiimeIntegration } from './tiimeIntegration';
import { ChaintrustIntegration } from './chaintrustIntegration';
import { InqomIntegration } from './inqomIntegration';
import { MegIntegration } from './megIntegration';
import { HttpIntegration } from './httpIntegration';
import { FileSystemIntegration } from './fileSystemIntegration';

const INTEGRATIONS: {
    [key: string]: IntegrationConfig
} = {
    [SageIntegration.CONFIG.id]: SageIntegration.CONFIG,
    [PennylaneIntegration.CONFIG.id]: PennylaneIntegration.CONFIG,
    [AxonautIntegration.CONFIG.id]: AxonautIntegration.CONFIG,
    [TiimeIntegration.CONFIG.id]: TiimeIntegration.CONFIG,
    [ChaintrustIntegration.CONFIG.id]: ChaintrustIntegration.CONFIG,
    [InqomIntegration.CONFIG.id]: InqomIntegration.CONFIG,
    [MegIntegration.CONFIG.id]: MegIntegration.CONFIG,
    [HttpIntegration.CONFIG.id]:  HttpIntegration.CONFIG,
    [FileSystemIntegration.CONFIG.id]: FileSystemIntegration.CONFIG,
};

export class IntegrationLoader {
    /**
     * Gets all available integration configurations.
     * @returns An array of all available integration configurations.
     */
    public static getAll(): IntegrationConfig[] {
        return Object.values(INTEGRATIONS);
    }

    /**
     * Gets the integration configuration for the specified integration name.
     * @param name The name of the integration.
     * @returns The integration configuration for the specified integration name.
     */
    static get(name: string): IntegrationConfig  {
        // Check if integration exists
        if(!INTEGRATIONS.hasOwnProperty(name)) {
            throw new Error(`Integration not found for name: ${name}`);
        }

        return INTEGRATIONS[name];
    }
}