import dotenv from 'dotenv';
dotenv.config();
import promptSync from 'prompt-sync';
const prompt = promptSync({});
import { expect, describe } from '@jest/globals';
import { CollectorLoader } from '../src/collectors/collectorLoader';
import { AuthenticationError } from '../src/error';
import { WebCollector } from '../src/collectors/webCollector';
import { Secret } from '../src/secret_manager/abstractSecretManager';
import { Collect } from '../src/collect/collect';
import { State } from '../src/model/state';

const id = process.argv[4] || null;
const ONE_MINUTE = 60 * 1000;       // 1 minute in milliseconds
const TWO_MINUTES = 2 * ONE_MINUTE; // 2 minutes in milliseconds

// Check if id is provided
if (!id) {
    console.info('No id provided. Loading all the collectors.');
    CollectorLoader.load();
}
else {
    console.info(`Loading collector with id: ${id}`);
    const loadedCollectors = CollectorLoader.load(id);
    if (loadedCollectors.size === 0) {
        throw new Error(`No collectors found with id: ${id}`);
    }
}

// For each collector
for (const collector of CollectorLoader.getAll()) {
    const id: string = collector.config.id;

    // If collector is WebCollector
    if (collector instanceof WebCollector) {
        describe(`${id} tests`, () => {
            it('Login with incorrect email format', async () => {
                const secret: Secret = {
                    params: {
                        email: 'incorrect_format_email',
                        password: 'fake_password'
                    },
                    cookies: null,
                    localStorage: null
                };

                // Collect invoices
                const collect = new Collect("")
                collect.state = State.DEFAULT_STATE;
                await expect(collector.collect_new_invoices(collect.state, collect.twofa_promise, secret, Date.UTC(2000, 0, 1), [], null))
                    .rejects.toThrow(AuthenticationError);
            }, ONE_MINUTE);

            it('Login with non-existing account', async () => {
                const secret: Secret = {
                    params: {
                        email: 'fake@email.com',
                        password: 'fake_password'
                    },
                    cookies: null,
                    localStorage: null
                };

                // Collect invoices
                const collect = new Collect("")
                collect.state = State.DEFAULT_STATE;
                await expect(collector.collect_new_invoices(collect.state, collect.twofa_promise, secret, Date.UTC(2000, 0, 1), [], null))
                    .rejects.toThrow(AuthenticationError);
            }, ONE_MINUTE);

            it('Login with wrong password', async () => {
                const secret: Secret = {
                    params: {
                        email: 'real@email.com',
                        password: 'fake_password'
                    },
                    cookies: null,
                    localStorage: null
                };

                // Collect invoices
                const collect = new Collect("")
                collect.state = State.DEFAULT_STATE;
                await expect(collector.collect_new_invoices(collect.state, collect.twofa_promise, secret, Date.UTC(2000, 0, 1), [], null))
                    .rejects.toThrow(AuthenticationError);
            }, ONE_MINUTE);

            let testSecret : Secret | undefined = undefined;

            it('Login with correct credentials, no cookies', async () => {
                const secret: Secret = {
                    params: {
                        email: 'real@email.com',
                        password: 'real_password'
                    },
                    cookies: null,
                    localStorage: null
                };

                // Collect invoices
                const collect = new Collect("")
                collect.state = State.DEFAULT_STATE;

                // Define what to do on 2FA
                collect.twofa_promise.instructions().then((twofa_instruction) => {
                    const twofa_code = prompt(`${twofa_instruction}: `);
                    collect.twofa_promise.setCode(twofa_code);
                });

                await collector.collect_new_invoices(collect.state, collect.twofa_promise, secret, Date.UTC(2000, 0, 1), [], null);

                // Assert cookies are not null
                expect(secret.cookies).not.toBeNull();

                // Assert localStorage are not null
                expect(secret.localStorage).not.toBeNull();

                // Save secret if collect is successful
                testSecret = secret;
            }, TWO_MINUTES);

            // Skip test if testSecret is not available = if previous test failed
            it('Login with correct credentials and with cookies and localStorage', async () => {
                if (testSecret == undefined) {
                    throw new Error(`Skipping test as previous test failed.`);
                }

                // Collect invoices
                const collect = new Collect("")
                collect.state = State.DEFAULT_STATE;
                await collector.collect_new_invoices(collect.state, collect.twofa_promise, testSecret, Date.UTC(2000, 0, 1), [], null);
            }, TWO_MINUTES);
        });
    }
    else {
        console.info(`Collector ${id} is not a web collector. Skipping tests.`);
    }
}
