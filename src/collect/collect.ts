import { CallbackHandler } from "../callback/callback";
import { AbstractCollector, CompleteInvoice } from "../collectors/abstractCollector";
import { CollectorLoader } from "../collectors/collectorLoader";
import { AuthenticationError, DesynchronizationError, LoggableError, MaintenanceError, NoInvoiceFoundError } from "../error";
import { I18n } from "../i18n";
import { IcCredential, State } from "../model/credential";
import { User } from "../model/user";
import { Location } from "../proxy/abstractProxy";
import { RegistryServer } from "../registryServer";
import { Secret } from "../secret_manager/abstractSecretManager";
import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";
import { TwofaPromise } from "./twofaPromise";

export class Collect {

    credential_id: string;
    state: State|undefined;
    twofa_promise: TwofaPromise;

    constructor(credential_id: string) {
        this.credential_id = credential_id;
        this.twofa_promise = new TwofaPromise();
    }

    async start(): Promise<void> {
        let credential: IcCredential|null = null;
        let user: User|null = null;
        let secret: Secret|null = null;
        let collector: AbstractCollector|null = null;
        let customer;

        try {
            // Get credential from credential_id
            credential = await IcCredential.fromId(this.credential_id);

            console.log(`Collecting invoices for ${this.credential_id} (${credential?.collector_id})`);

            // Check if credential exists
            if (!credential) {
                throw new Error(`Credential with id "${this.credential_id}" not found.`);
            }
            
            // Set progress step to preparing
            credential.state.update(State._1_PREPARING);

            // Set state from credential
            this.state = credential.state;

            // Get user from credential
            user = await credential.getUser();

            // Get customer from user
            customer = await user.getCustomer();

            // Get secret from secret_manager_id
            secret = await SecretManagerFactory.getSecretManager().getSecret(credential.secret_manager_id);

            // Get collector from collector_id
            collector = CollectorLoader.get(credential.collector_id);

            // Check if collector not found
            if(collector == null) {
                throw new Error(`No collector with id "${credential.collector_id}" found.`);
            }

            // Set collector for twofa promise
            this.twofa_promise.collector = collector;

            // Check if secret not found
            if (!secret) {
                throw new DesynchronizationError(credential.id, collector);
            }

            // Compute if this is the first collect
            const first_collect = !credential.last_collect_timestamp;

            // Get previous invoices
            const previousInvoices = credential.invoices.map((inv) => inv.id);

            // Collect invoices
            const newInvoices = await this.collect_new_invoices(this.state, collector, secret, !first_collect, previousInvoices, user.location);

            console.log(`Invoice collection for credential ${this.credential_id} succeed`);

            // If at least one new invoice has been downloaded
            if(newInvoices.length > 0) {
                // Loop through invoices
                for (const [index, invoice] of newInvoices.entries()) {
                    // If not the first collect and invoice is more recent than the credential creation date
                    if (!first_collect && credential.create_timestamp < invoice.timestamp) {
                        console.log(`Sending invoice ${index + 1}/${newInvoices.length} (${invoice.id}) to callback`);

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
                        console.log(`Adding invoice ${index + 1}/${newInvoices.length} (${invoice.id}) to credential without sending to callback`);
                        // Add invoice to credential
                        credential.addInvoice(invoice);
                    }
                }

                // Sort invoices
                credential.sortInvoices();
            }

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
                    credential.state.update(State._7_DONE);

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 day
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            // If error is LoggableError
            else if(err instanceof LoggableError) {
                console.error(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                console.error(err);
                RegistryServer.getInstance().logError(customer.bearer, err);

                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state.update(State._0_UNKNOWN);

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 day
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            else if (err instanceof AuthenticationError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                // If credential exists
                if (credential && user) {
                    // Update credential
                    credential.state.update(State._1_ERROR, I18n.get(err.message, user.locale));

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
                    // Update credential
                    credential.state.update(State._0_UNKNOWN);

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 day
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            else {
                console.error(err);
                
                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state.update(State._0_UNKNOWN);
                }
            }
        }
        finally {
            // If credential exists
            if (credential) {
                // Commit credential
                await credential.commit();
            }

            // If secret, collector, credential and user exists
            if (secret && collector && credential && user) {
                // Get cookies from error
                await SecretManagerFactory.getSecretManager().updateSecret(credential.secret_manager_id, `${user.customer_id}_${user.id}_${collector.config.id}`, secret);
            }
        }
    }

    

    async collect_new_invoices(
            state: State,
            collector: AbstractCollector,
            secret: Secret,
            download: boolean,
            previousInvoices: any[],
            location: Location | null): Promise<CompleteInvoice[]> {  

        // Check if a mandatory field is missing
            for (const [key, value] of Object.entries(collector.config.params)) {
                if (value.mandatory && !secret.params[key]) {
                    throw new Error(`Field "${key}" is missing.`);
                }
            }

            try {
                const invoices = await collector._collect(state, secret, location, this.twofa_promise);

                // Get new invoices
                const newInvoices = invoices.filter((inv) => !previousInvoices.includes(inv.id));
                let completeInvoices: CompleteInvoice[] = [];

                if(newInvoices.length > 0) {
                    console.log(`Found ${invoices.length} invoices and ${newInvoices.length} are new`);

                    // Download new invoices if needed
                    if(download) {
                        console.log(`Downloading ${newInvoices.length} invoices`);

                        // Set progress step to downloading
                        state.update(State._6_DOWNLOADING);

                        // For each invoice
                        for(let newInvoice of newInvoices) {
                            const completeInvoice = await collector._download(newInvoice);

                            // If data is not null, the invoice is ready
                            if(completeInvoice.data != null && completeInvoice.data.length > 0) {
                                console.log(`Invoice ${newInvoice.id} successfully downloaded`);
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

                // Set progress step to done
                state.update(State._7_DONE);

                return completeInvoices;
            }
            finally {
                // Close the collector resources
                collector.close();
            }
    }
}
