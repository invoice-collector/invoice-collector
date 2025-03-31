import { expect, describe } from '@jest/globals';
import { CollectorLoader } from '../src/collectors/collectorLoader';
import { Server } from '../src/server';
import { AuthenticationError } from '../src/error';

const ids = process.argv.slice(3);
for (const id of ids) {
    describe(`${id} tests`, () => {
        // Load collector
        CollectorLoader.load(id);

        // Get collector
        const collector = CollectorLoader.get(id);

        // Check if collector not found
        if (collector == null) {
            throw new Error(`No collector with id "${id}" found.`);
        }

        it('Login with incorrect email format', async () => {
            const params = {
                id: 'test',
                password: 'test'
            }
            await expect(collector.collect_new_invoices(params, true, [], Server.DEFAULT_LOCALE, null))
                .rejects.toThrow(AuthenticationError);
        });

        it('Login with non-existing account', async () => {
            const params = {
                id: 'test@test.test',
                password: 'test'
            }
            await expect(collector.collect_new_invoices(params, true, [], Server.DEFAULT_LOCALE, null))
                .rejects.toThrow(AuthenticationError);
        });

        /*it('Login with wrong password', async () => {
            //TODO
        });

        it('Login with correct credentials', async () => {
            //TODO
        });*/
    });
}
