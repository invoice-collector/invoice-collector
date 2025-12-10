import dotenv from 'dotenv';
dotenv.config();
import { Config } from "../../src/collectors/abstractCollector";
import { CollectorLoader } from "../../src/collectors/collectorLoader";

let configs: Config[] = [];


describe('Get collectors', () => {
    it(`Load collectors`, async () => {
        configs = await CollectorLoader.getAll();
        console.log(`${configs.length} collectors loaded`);
        for (const config of configs) {
            console.log(`Getting collector: ${config.id}`);
            await CollectorLoader.get(config.id);
        }
    });
});
