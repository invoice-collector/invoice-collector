import dotenv from 'dotenv';
dotenv.config();
import { CollectorLoader } from "../../src/collectors/collectorLoader";

describe('Get collectors', () => {
    it(`Load collectors`, async () => {
        const configs = await CollectorLoader.getAll();
        console.log(`${configs.length} collectors loaded`);
        for (const config of configs) {
            try {
                await CollectorLoader.get(config.id);
            }
            catch {
                throw Error(`Unable to load collector "${config.id}"`)
            }
        }
    });
});
