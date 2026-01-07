import dotenv from 'dotenv';
dotenv.config();
import promptSync from 'prompt-sync';
const prompt = promptSync({});
import http from 'http';
import readline from 'readline';
import { expect, describe } from '@jest/globals';
import { CollectorLoader } from '../src/collectors/collectorLoader';
import { AuthenticationError } from '../src/error';
import { Secret } from '../src/secret_manager/abstractSecretManager';
import { State } from '../src/model/state';
import { AbstractCollector, CollectorType, Config } from '../src/collectors/abstractCollector';
import { TwofaPromise } from '../src/collect/twofaPromise';
import * as utils from '../src/utils';
import { I18n } from '../src/i18n';
import { WebSocketServer } from '../src/websocket/webSocketServer';
import { WebCollector } from '../src/collectors/webCollector';

const id = process.argv[4] || null;
const ONE_MINUTE = 60 * 1000;       // 1 minute in milliseconds
const TWO_MINUTES = 2 * ONE_MINUTE; // 2 minutes in milliseconds
const PORT = parseInt(utils.getEnvVar('PORT')) + 1;

// Check if id is provided
if (!id) {
    console.info('No id provided. Loading all the collectors.');
    CollectorLoader.load();
}
else {
    console.info(`Loading collector with id: ${id}`);
    const loadedCollectors = await CollectorLoader.load(id);
    if (loadedCollectors.size === 0) {
        throw new Error(`No collectors found with id: ${id}`);
    }
}
// Start readline interface for async prompt
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function createWebsocketClientAndServer(collector: AbstractCollector<Config>): Promise<{
    webSocketServer: WebSocketServer,
    webSocketClient: WebSocket
}> {
    // Create an http server to handle web socket connections
    const httpServer = http.createServer();
    httpServer.listen(PORT, () => {
        console.log(`HTTP server listening on port ${PORT}`);
    });

    // Instanciate web socket server
    const webSocketServer = new WebSocketServer(httpServer, I18n.DEFAULT_LOCALE, collector);
    const webSocketPath = webSocketServer.start();

    // Connect to web socket server
    WebCollector.SCREENSHOT_INTERVAL_MS = 1000 * 10; // 10 seconds
    const webSocketClient = new WebSocket(`ws://localhost:${PORT}${webSocketPath}`);
    webSocketClient.addEventListener('open', () => {
        let isFirstScreenshot = true;
        webSocketClient.addEventListener('message', async (message) => {
            const parsedData = JSON.parse(message.data.toString());
            if(parsedData.type == "screenshot") {
                if(isFirstScreenshot) {
                    isFirstScreenshot = false;

                    console.log("Login to the website and press Enter to continue...");

                    // Listen for user input asynchronously
                    rl.on('line', (input) => {
                        // Send close message to server
                        webSocketClient.send(JSON.stringify({ type: 'close', reason: 'ok' }));
                        // Close readline interface
                        rl.close();
                    });
                }
            }
            else if(parsedData.type == "state" && parsedData.state.index == 3) {
                // Wait until main thread is waiting for twofa code
                while (webSocketServer.onTwofa == undefined) {
                    await utils.delay(1000);
                }
                const twofa_code = prompt(`${parsedData.state.message}: `).trim();
                webSocketClient.send(JSON.stringify({ type: 'twofa', twofa: twofa_code }));
            }
        });
    });
    return {
        webSocketServer,
        webSocketClient
    }
}

// For each collector
for (const collectorConfig of await CollectorLoader.getAll()) {

    const id: string = collectorConfig.id;

    // If collector is WebCollector
    if (collectorConfig.type == CollectorType.WEB) {
        // Get collector
        const collector = await CollectorLoader.get(id);

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
                await expect(collector.collect_new_invoices(
                    State.DEFAULT_STATE,
                    new TwofaPromise(),
                    undefined,
                    secret,
                    Date.UTC(2000, 0, 1),
                    [],
                    null
                ))
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
                await expect(collector.collect_new_invoices(
                    State.DEFAULT_STATE,
                    new TwofaPromise(),
                    undefined,
                    secret,
                    Date.UTC(2000, 0, 1),
                    [],
                    null
                ))
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
                await expect(collector.collect_new_invoices(
                    State.DEFAULT_STATE,
                    new TwofaPromise(),
                    undefined,
                    secret,
                    Date.UTC(2000, 0, 1),
                    [],
                    null
                ))
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

                // Instanciate web socket client and server
                const { webSocketServer, webSocketClient } = await createWebsocketClientAndServer(collector);

                await collector.collect_new_invoices(
                    State.DEFAULT_STATE,
                    new TwofaPromise(),
                    webSocketServer,
                    secret,
                    Date.UTC(2000, 0, 1),
                    [],
                    null
                );

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

                // Instanciate web socket client and server
                const { webSocketServer, webSocketClient } = await createWebsocketClientAndServer(collector);

                // Collect invoices
                await collector.collect_new_invoices(
                    State.DEFAULT_STATE,
                    new TwofaPromise(),
                    webSocketServer,
                    testSecret,
                    Date.UTC(2000, 0, 1),
                    [],
                    null
                );
            }, TWO_MINUTES);
        });
    }
    else {
        console.info(`Collector ${id} is not a web collector. Skipping tests.`);
    }
}
