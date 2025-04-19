import { CallbackHandler } from "../callback/callback";
import { AbstractCollector, CompleteCollectResult, CompleteInvoice } from "../collectors/abstractCollector";
import { CollectorLoader } from "../collectors/collectorLoader";
import { AuthenticationError, CollectorError, DesynchronizationError, LoggableError, MaintenanceError, NoInvoiceFoundError } from "../error";
import { IcCredential, State } from "../model/credential";
import { Location } from "../proxy/abstractProxy";
import { RegistryServer } from "../registryServer";
import { Secret } from "../secret_manager/abstractSecretManager";
import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";
import { Server } from "../server";
import { CollectPool } from "./collectPool";

export class Collect {

    credential_id: string;

    constructor(credential_id: string) {
        this.credential_id = credential_id;
    }

    async start(): Promise<void> {
        // Check if a collect is in progress for this credential
        if (CollectPool.getInstance().isCollectInProgress(this.credential_id)) {
            throw new Error(`A collect is already in progress for credential ${this.credential_id}`);
        }
        
        // Register collect in progress
        CollectPool.getInstance().registerCollect(this.credential_id, this);

        let credential: IcCredential|null = null;
        let customer;
        try {
            // Get credential from credential_id
            credential = await IcCredential.fromId(this.credential_id);

            console.log(`Collecting invoices for ${this.credential_id} (${credential?.collector_id})`);

            // Check if credential exists
            if (!credential) {
                throw new Error(`Credential with id "${this.credential_id}" not found.`);
            }

            // Get user from credential
            const user = await credential.getUser();

            // Check if user exists
            if (!user) {
                throw new Error(`Could not find user for credential with id "${credential.id}".`);
            }

            // Get customer from user
            customer = await user.getCustomer();

            // Check if customer exists
            if (!customer) {
                throw new Error(`Could not find customer for user with id "${user.id}".`);
            }

            // Get secret from secret_manager_id
            const secret = await SecretManagerFactory.getSecretManager().getSecret(credential.secret_manager_id);

            // Get collector from collector_id
            const collector = CollectorLoader.get(credential.collector_id);

            // Check if collector not found
            if(collector == null) {
                throw new Error(`No collector with id "${credential.collector_id}" found.`);
            }

            // Check if secret not found
            if (!secret) {
                throw new DesynchronizationError(credential.id, collector);
            }

            // Compute if this is the first collect
            const first_collect = !credential.last_collect_timestamp;

            // Get previous invoices
            const previousInvoices = credential.invoices.map((inv) => inv.id);

            // Collect invoices
            const { invoices, cookies } = await this.collect_new_invoices(collector, secret, !first_collect, previousInvoices, user.locale, user.location);

            // Save cookies in secret_manager
            secret.cookies = cookies;
            await SecretManagerFactory.getSecretManager().updateSecret(credential.secret_manager_id, `${user.customer_id}_${user.id}_${collector.config.id}`, secret);
                    
            console.log(`Invoice collection for credential ${this.credential_id} succeed`);

            // If at least one new invoice has been downloaded
            if(invoices.length > 0) {
                // Loop through invoices
                for (const [index, invoice] of invoices.entries()) {
                    // If not the first collect and invoice is more recent than the credential creation date
                    if (!first_collect && credential.create_timestamp < invoice.timestamp) {
                        console.log(`Sending invoice ${index + 1}/${invoices.length} (${invoice.id}) to callback`);

                        try {
                            // Send invoice to callback
                            const callback = new CallbackHandler(customer);
                            callback.sendInvoice(credential.collector_id, user.remote_id, invoice);

                            // Add invoice to credential only if callback successfully reached
                            credential.addInvoice(invoice);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    else {
                        // Add invoice to credential
                        credential.addInvoice(invoice);
                    }
                }

                // Sort invoices
                credential.sortInvoices();
            }

            // Update state
            credential.state = State.SUCCESS;

            // Log success
            RegistryServer.getInstance().logSuccess(collector.config.id);

            // Update last collect
            credential.last_collect_timestamp = Date.now();

            // Compute next collect
            credential.computeNextCollect();
        }
        catch (err) {
            // If error is NoInvoiceFoundError
            if (err instanceof NoInvoiceFoundError) {
                console.warn(`Invoice collection for credential ${this.credential_id} succeed BUT no invoice found, collector may be broken`);
                RegistryServer.getInstance().logError(customer.bearer, err);

                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state = State.SUCCESS;

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 week
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            // If error is LoggableError
            else if(err instanceof LoggableError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                RegistryServer.getInstance().logError(customer.bearer, err);

                // If credential exists
                if (credential) {
                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 week
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_WEEK_MS;
                }
            }
            else if (err instanceof AuthenticationError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state = State.ERROR;
                    credential.error = err.message;

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Cancel next collect
                    credential.next_collect_timestamp = Number.NaN;
                }
            }
            else if (err instanceof MaintenanceError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                // If credential exists
                if (credential) {
                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 day
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            else {
                console.error(err);
            }
        }
        finally {
            // If credential exists
            if (credential) {
                // Commit credential
                await credential.commit();
            }
        }

        // Unregister collect in progress
        CollectPool.getInstance().unregisterCollect(this.credential_id);
    }

    

    async collect_new_invoices(
            collector: AbstractCollector,
            secret: Secret,
            download: boolean,
            previousInvoices: any[],
            locale: string,
            location: Location | null): Promise<CompleteCollectResult> {  

        // Check if a mandatory field is missing
            for (const [key, value] of Object.entries(collector.config.params)) {
                if (value.mandatory && !secret.params[key]) {
                    throw new Error(`Field "${key}" is missing.`);
                }
            }

            try {
                const { invoices, cookies } = await collector._collect(secret, location);

                // Get new invoices
                const newInvoices = invoices.filter((inv) => !previousInvoices.includes(inv.id));
                let completeInvoices: CompleteInvoice[] = [];

                if(newInvoices.length > 0) {
                    console.log(`Found ${invoices.length} invoices but only ${newInvoices.length} are new`);

                    // Download new invoices if needed
                    if(download) {
                        console.log(`Downloading ${newInvoices.length} invoices`);

                        // For each invoice
                        for(let newInvoice of newInvoices) {
                            const completeInvoice = await collector._download(newInvoice);

                            // If data is not null, the invoice is ready
                            if(completeInvoice.data != null && completeInvoice.data.length > 0) {
                                completeInvoices.push(completeInvoice);
                            }
                        }

                        // Order invoices by timestamp
                        completeInvoices.sort((a, b) => a.timestamp - b.timestamp);
                    }
                    else {
                        console.log(`This is the first collect, do not download invoices`);

                        // Add not downloaded invoice to the list
                        for(let newInvoice of newInvoices) {
                            completeInvoices.push({
                                ...newInvoice,
                                data: null,
                                mimetype: null
                            });
                        }
                    }
                }
                else {
                    console.log(`Found ${invoices.length} invoices but none are new`);
                }

                return {
                    invoices: completeInvoices,
                    cookies
                }
            }
            catch (error) {
                if (error instanceof CollectorError) {
                    error.message = Server.i18n.__({ phrase: error.message, locale });
                }
                throw error;
            }
            finally {
                // Close the collector resources
                collector.close();
            }
    }
}
