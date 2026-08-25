
import dotenv from 'dotenv';
dotenv.config();
import axios from "axios";
import { CollectorLoader } from "../../src/collectors/collectorLoader";
import { CollectorState } from "../../src/collectors/abstractCollector";
import * as utils from "../../src/utils";

describe('Get collectors', () => {
    it(`Check collectors logos`, async () => {
        const configs = await CollectorLoader.getAll();
        const notPlannedConfigs = configs.filter(config => !config.state || config.state !== CollectorState.PLANNED);

        const errors: (string | null)[] = [];
        for (const notPlannedConfig of notPlannedConfigs) {
            try {
                await axios.get(notPlannedConfig.logo, {
                    maxRedirects: 5,
                    headers: {
                        'User-Agent': 'Invoice Collector logo checker/1.0'
                    }
                });
            }
            catch (e) {
                const status = axios.isAxiosError(e) && e.response
                    ? ` (HTTP ${e.response.status})`
                    : '';
                errors.push(`Unable to access logo for collector "${notPlannedConfig.id}" at ${notPlannedConfig.logo}${status}`);
            }
            await utils.delay(500); // Delay to avoid rate limiting
        };

        const failedChecks = errors.filter((error): error is string => error !== null);
        if (failedChecks.length > 0) {
            throw Error(`Logo checks failed:\n${failedChecks.join('\n')}`);
        }
    }, 120000);
});
