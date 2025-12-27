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
import { Secret } from '../src/secret_manager/abstractSecretManager';
import { Collect } from '../src/collect/collect';
import { IcCredential } from '../src/model/credential';
import { State } from '../src/model/state';
import { I18n } from '../src/i18n';
import { DatabaseFactory } from '../src/database/databaseFactory';
import { SecretManagerFactory } from '../src/secret_manager/secretManagerFactory';
import { WebSocketServer } from '../src/websocket/webSocketServer';
import * as utils from '../src/utils';
import { WebCollector } from '../src/collectors/web2Collector';
import { AbstractCollector, CollectorType, Config } from '../src/collectors/abstractCollector';

const PORT = parseInt(utils.getEnvVar('PORT')) + 1;

async function getCredentialFromId(credential_id: string): Promise<IcCredential> {
    await DatabaseFactory.getDatabase().connect();
    const credential = await DatabaseFactory.getDatabase().getCredential(credential_id);
    if(credential == null) {
        throw new Error(`No credential with id "${credential_id}" found.`);
    }
    return credential;
}

async function getSecretFromCredential(credential: IcCredential): Promise<Secret> {
    await SecretManagerFactory.getSecretManager().connect();
    const secret = await SecretManagerFactory.getSecretManager().getSecret(credential.secret_manager_id);
    if(secret == null) {
        throw new Error(`No secret with id "${credential.secret_manager_id}" found.`);
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
            await SecretManagerFactory.getSecretManager().updateSecret(credential.secret_manager_id, "test.override", secret);
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

            // Mock the collector so that if login method is triggered, it raise an error
            (collector as any).login = async () => {
                throw new Error("Login method is not allowed");
            };
        }
        // If collector is found, build the secret
        else {
            // Get collector
            collector = await CollectorLoader.get(id);

            // Build secret
            secret = {
                params: {},
                cookies: null,
                localStorage: null
            }
            let argv_index = 3;

            // Loop throught each config
            for(const param_key of Object.keys(collector.config.params)) {
                if(process.argv[argv_index]) {
                    secret.params[param_key] = process.argv[argv_index]
                    if(param_key.toLowerCase().includes("password") || param_key.toLowerCase().includes("secret") || param_key.toLowerCase().includes("token")) {
                        console.log(`${param_key}: <hidden>`)
                    }
                    else {
                        console.log(`${param_key}: ${process.argv[argv_index]}`)
                    }
                }
                else {
                    if(param_key.toLowerCase().includes("password") || param_key.toLowerCase().includes("secret") || param_key.toLowerCase().includes("token")) {
                        secret.params[param_key] = prompt.hide(`${param_key}: `);
                    }
                    else {
                        secret.params[param_key] = prompt(`${param_key}: `);
                    }
                }
                argv_index++;
            }
        }

        // Compute secret hash
        secretHash = await getHashFromSecret(secret);

        // ---------- PART 3 : PERFORM COLLECT ----------

        // Connect to database if is agent collector
        if(collector.config.type === CollectorType.AGENT) {
            await DatabaseFactory.getDatabase().connect();
        }

        // Collect invoices
        const collect = new Collect("", undefined)
        collect.state = State.DEFAULT_STATE;

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


        // Collect new invoices
        const newInvoices = await collector.collect_new_invoices(
            collect.state,
            collect.twofa_promise,
            webSocketServer,
            secret,
            Date.UTC(2000, 0, 1),
            [],
            null
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
