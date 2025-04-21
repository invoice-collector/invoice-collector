import dotenv from 'dotenv';
dotenv.config();
import { expect, describe } from '@jest/globals';
import { CollectorLoader } from '../src/collectors/collectorLoader';
import { Server } from '../src/server';
import { AuthenticationError } from '../src/error';
import { ScrapperCollector } from '../src/collectors/scrapperCollector';
import { Secret } from '../src/secret_manager/abstractSecretManager';
import { Collect } from '../src/collect/collect';

const ids = process.argv.slice(3);
const ONE_MINUTE = 60 * 1000; // 1 minute in milliseconds

// Check if ids are provided
if (ids.length === 0) {
    console.info('No ids provided. Loading all the collectors.');
    CollectorLoader.load();
}
else {
    for (const id of ids) {
        // Load collector
        CollectorLoader.load(id);
    }
}

for (const collector of CollectorLoader.getAll()) {
    const id: string = collector.config.id;
    
    // Check if collector not found
    if (collector instanceof ScrapperCollector) {
        describe(`${id} tests`, () => {
            it('Login with incorrect email format', async () => {
                const secret: Secret = {
                    params: {
                        id: 'test',
                        password: 'test'
                    },
                    cookies: null,
                };
                const collect = new Collect("")
                await expect(collect.collect_new_invoices(collector, secret, true, [], null))
                    .rejects.toThrow(AuthenticationError);
            }, ONE_MINUTE);

            it('Login with non-existing account', async () => {
                const secret: Secret = {
                    params: {
                        id: 'fakeemail@test.ic',
                        password: 'test'
                    },
                    cookies: null,
                };
                const collect = new Collect("")
                await expect(collect.collect_new_invoices(collector, secret, true, [], null))
                    .rejects.toThrow(AuthenticationError);
            }, ONE_MINUTE);

            /*it('Login with wrong password', async () => {
                //TODO
            });

            it('Login with correct credentials', async () => {
                //TODO
            });*/
        });
    }
    else {
        console.info(`Collector ${id} is an API collector. Skipping tests.`);
    }
}
