import promptSync from 'prompt-sync';
const prompt = promptSync({});
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import http from 'http';
import assert from 'assert';
import * as crypto from 'crypto';
import WebSocket from 'ws';
import readline from 'readline';

import { CollectorLoader } from '../src/collectors/collectorLoader';
import { LoggableError } from '../src/error';
import { IcCredential } from '../src/model/credential';
import { State } from '../src/model/state';
import { I18n } from '../src/i18n';
import { DatabaseFactory } from '../src/database/databaseFactory';
import { SecretManagerFactory } from '../src/secret_manager/secretManagerFactory';
import { WebSocketServer } from '../src/websocket/webSocketServer';
import * as utils from '../src/utils';
import { WebCollector } from '../src/collectors/webCollector';
import { AbstractCollector, CollectorType, Config } from '../src/collectors/abstractCollector';
import { TwofaPromise } from '../src/collect/twofaPromise';
import { Secret } from '../src/model/secret';

const PORT = parseInt(utils.getEnvVar('PORT')) + 1;

async function getCredentialFromId(credential_id: string): Promise<IcCredential> {
    const credential = await DatabaseFactory.getDatabase().getCredential(credential_id);
    if(credential == null) {
        throw new Error(`No credential with id "${credential_id}" found.`);
    }
    return credential;
}

async function getSecretFromCredential(credential: IcCredential): Promise<Secret> {
    let secret = credential.getSecret();
    secret.value = await SecretManagerFactory.getSecretManager().getValue(credential.secret_id);
    if(secret == null) {
        throw new Error(`No secret with id "${credential.secret_id}" found.`);
    }
    return secret;
}

async function updateSecret(credential: IcCredential | null, secret: Secret | null, secretHash: string | null): Promise<void> {
    // If credential and secret and secretHash exists
    if (credential && secret && secretHash) {
        // Get new secret hash
        const newSecretHash = getHashFromSecret(secret);
        // If old hash and new hash are different, it means the secret has changed, it means login succeeded
        if (secretHash != newSecretHash) {
            // Update secret in secret manager
            console.log(`Updating secret for credential ${credential.id}`);
            await SecretManagerFactory.getSecretManager().updateSecret(secret);
            console.log(`Secret updated!`);
        }
    }
}

function getHashFromSecret(secret: Secret): string {
    return crypto.createHash('sha256').update(JSON.stringify(secret)).digest('hex');
}

(async () => {
    let id;
    let credential: IcCredential | null = null;
    let secret: Secret | null = null;
    let secretHash: string | null = null;
    let useInteractiveLogin: boolean;

    let exited = false;
    process.on('SIGINT', async function() {
        console.log("Caught interrupt signal");
        if(!exited) {
            exited = true;
            await updateSecret(credential, secret, secretHash);

            // Try to disconnect from the database
            try{ DatabaseFactory.getDatabase().disconnect() }
            catch {}
        }
        DatabaseFactory.getDatabase().disconnect();
        process.exit();
    });

    // Start readline interface for async prompt
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        // Connect to database
        await DatabaseFactory.getDatabase().connect();

        // ---------- PART 1 : ASK COLLECTOR ID OR CREDENTIAL ID ----------

        // Get collector
        if(process.argv[2]) {
            id = process.argv[2]
            console.log(`collector id / credential id: ${id}`)
        }
        else {
            id = prompt('collector id / credential id: ').trim();
        }

        // ---------- PART 2 : GET COLLECTOR AND SECRET ----------

        // Load collectors
        const loadedCollectors = await CollectorLoader.load(id);

        // If collector loaded, it means it is a credential
        let collector: AbstractCollector<Config>;
        if(loadedCollectors.size == 0) {
            console.log(`No collector found with id "${id}", trying to find credential...`);
            // Get credential
            credential = await getCredentialFromId(id);
            // Get secret
            secret = await getSecretFromCredential(credential);
            // Load collectors
            await CollectorLoader.load(credential.collector_id);
            // Get collector
            collector = await CollectorLoader.get(credential.collector_id);

            // Ask user if he wants to test interactive login
            const enableInteractiveLogin = prompt(`Use interactive login (y/n)? (default y): `).toLowerCase().startsWith('y') ?? true;
            // Update collector params based on customer settings
            useInteractiveLogin = AbstractCollector.updateCollectorParams(enableInteractiveLogin, collector.config);

            // Mock the collector so that if login method is triggered, it raise an error
            (collector as any).login = async () => {
                throw new Error("Login method is not allowed");
            };
        }
        // If collector is found, build the secret
        else {
            // Get collector
            collector = await CollectorLoader.get(id);

            // Ask user if he wants to test interactive login
            const enableInteractiveLogin = prompt(`Use interactive login (y/n)? (default y): `).toLowerCase().startsWith('y') ?? true;
            // Update collector params based on customer settings
            useInteractiveLogin = AbstractCollector.updateCollectorParams(enableInteractiveLogin, collector.config);

            // Build secret
            secret = new Secret("", {
                params: {},
                cookies: null,
                localStorage: null
            });
            let argv_index = 3;

            // Loop throught each config
            for(const param_key of Object.keys(collector.config.params)) {
                const secretParams = await secret.getParams();
                if(process.argv[argv_index]) {
                    secretParams[param_key] = process.argv[argv_index]
                    if(param_key.toLowerCase().includes("password") || param_key.toLowerCase().includes("secret") || param_key.toLowerCase().includes("token")) {
                        console.log(`${param_key}: <hidden>`)
                    }
                    else {
                        console.log(`${param_key}: ${process.argv[argv_index]}`)
                    }
                }
                else {
                    if(param_key.toLowerCase().includes("password") || param_key.toLowerCase().includes("secret") || param_key.toLowerCase().includes("token")) {
                        secretParams[param_key] = prompt.hide(`${param_key}: `);
                    }
                    else {
                        secretParams[param_key] = prompt(`${param_key}: `);
                    }
                }
                argv_index++;
            }
        }

        // Compute secret hash
        secretHash = await getHashFromSecret(secret);

        // ---------- PART 3 : PERFORM COLLECT ----------

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
        // On connection open
        webSocketClient.addEventListener('open', () => {
            // On message received
            webSocketClient.addEventListener('message', async (message) => {
                // Parse message data
                const parsedData = JSON.parse(message.data.toString());
                // If interactive open message
                if(parsedData.type == "interactive" && parsedData.reason == "open") {
                    // Display instructions to user
                    console.log(parsedData.instructions);
                    // Listen for user input asynchronously
                    rl.on('line', (input) => {
                        // Send close message to server
                        webSocketClient.send(JSON.stringify({ type: 'interactive', reason: 'close' }));
                        // Close readline interface
                        rl.close();
                    });
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

        // Collect new invoices
        const newInvoices = await collector.collect_new_invoices(
            State.DEFAULT_STATE,
            new TwofaPromise(),
            webSocketServer,
            secret,
            Date.UTC(2000, 0, 1),
            [],
            null,
            useInteractiveLogin
        );
        console.log(`${newInvoices.length} invoices downloaded`);

        // ---------- PART 4 : SAVE INVOICES ----------

        for (const invoice of newInvoices) {
            // If data is not null
            if (invoice.data) {
                // Save data to file
                fs.writeFileSync(`./media/${id}_${invoice.id}.pdf`, Buffer.from(invoice.data, 'base64'));
            }
            else {
                console.warn(`Invoice ${invoice.id} was not downloaded`);
            }

            // Log invoice details
            console.log({
                id: invoice.id,
                amount: invoice.amount,
                link: invoice.link,
                timestamp: invoice.timestamp,
                mimetype: invoice.mimetype
            })
        }

        // ---------- PART 5 : CHECK INVOICES ----------

        for (const invoice of newInvoices) {
            assert(invoice.id, `Invoice id is not defined`);
            assert(invoice.link, `Invoice link is not defined`);
            assert(!isNaN(invoice.timestamp), `Timestamp ${invoice.timestamp} is NaN`);
            assert(invoice.timestamp >= Date.UTC(2000, 0, 1), `Invoice timestamp ${invoice.timestamp} is before year 2000. Did you forget to set the year in the date format?`);
            assert(invoice.amount, `Invoice amount is not defined`);
            assert(invoice.data, `Invoice data is not defined`);
            assert(invoice.mimetype, `Invoice mimetype is not defined`);
        }
    } catch (error) {
        if (error instanceof Error) {
            error.message = I18n.get(error.message, I18n.DEFAULT_LOCALE);
        }
        console.error(error);
        if (error instanceof LoggableError) {
            // Save screenshot if exists
            if (error.screenshot) {
                fs.writeFileSync(`./media/${id}_screenshot.png`, Buffer.from(error.screenshot, 'base64'));
            }

            // Save source code if exists
            if (error.source_code) {
                fs.writeFileSync(`./media/${id}_source_code.html`, Buffer.from(error.source_code, 'base64'));
            }
        }
    }
    finally {
        // Close readline interface
        rl.close();
        // Update secret if needed
        await updateSecret(credential, secret, secretHash);

        // Try to disconnect from the database
        try{ DatabaseFactory.getDatabase().disconnect() }
        catch {}
    }
})();
