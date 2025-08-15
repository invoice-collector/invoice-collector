import promptSync from 'prompt-sync';
const prompt = promptSync({});
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import { CollectorLoader } from '../src/collectors/collectorLoader';
import { LoggableError } from '../src/error';
import { Secret } from '../src/secret_manager/abstractSecretManager';
import { Collect } from '../src/collect/collect';
import { IcCredential, State } from '../src/model/credential';
import { I18n } from '../src/i18n';
import assert from 'assert';
import * as crypto from 'crypto';
import { DatabaseFactory } from '../src/database/databaseFactory';
import { SecretManagerFactory } from '../src/secret_manager/secretManagerFactory';
import { AbstractCollector } from '../src/collectors/abstractCollector';

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
            await updateSecret(credential, secret, secretHash);
            exited = true;
        }
        DatabaseFactory.getDatabase().disconnect();
        process.exit();
    });

    try {
        // ---------- PART 1 : ASK COLLECTOR ID OR CREDENTIAL ID ----------

        // Get collector
        if(process.argv[2]) {
            id = process.argv[2]
            console.log(`collector id / credential id: ${id}`)
        }
        else {
            id = prompt('collector id / credential id: ');
        }

        // ---------- PART 2 : GET COLLECTOR AND SECRET ----------

        // Load collectors
        const loadedCollectors = CollectorLoader.load(id);

        // If collector loaded, it means it is a credential
        let collector: AbstractCollector;
        if(loadedCollectors.size == 0) {
            console.log(`No collector found with id "${id}", trying to find credential...`);
            // Get credential
            credential = await getCredentialFromId(id);
            // Get secret
            secret = await getSecretFromCredential(credential);
            // Load collectors
            CollectorLoader.load(credential.collector_id);
            // Get collector
            collector = CollectorLoader.get(credential.collector_id);

            // Mock the collector so that if login method is triggered, it raise an error
            (collector as any).login = async () => {
                throw new Error("Login method is not allowed");
            };
        }
        // If collector is found, build the secret
        else {
            // Get collector
            collector = CollectorLoader.get(id);

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

        // Collect invoices
        const collect = new Collect("")
        collect.state = State.DEFAULT_STATE;

        // Define what to do on 2FA
        collect.twofa_promise.instructions().then((twofa_instruction) => {
            const twofa_code = prompt(`${twofa_instruction}: `);
            collect.twofa_promise.setCode(twofa_code);
        });

        const newInvoices = await collect.collect_new_invoices(collect.state, collector, secret, true, [], null);
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
            assert(invoice.id.length > 0, `Invoice id is empty`);
            assert(invoice.timestamp > 0, `Timestamp ${invoice.timestamp} is not greater than 0`);
            assert(!isNaN(invoice.timestamp), `Timestamp ${invoice.timestamp} is NaN`);
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
        await updateSecret(credential, secret, secretHash);
        DatabaseFactory.getDatabase().disconnect();
    }
})();
