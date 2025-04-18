import { CronJob } from 'cron';
import { IcCredential, State } from '../model/credential';
import { LoggableError, AuthenticationError, MaintenanceError, DesynchronizationError, NoInvoiceFoundError } from '../error';
import { RegistryServer } from '../registryServer';
import { AbstractSecretManager } from '../secret_manager/abstractSecretManager';
import { CollectorLoader } from '../collectors/collectorLoader';
import { CallbackHandler } from '../callback/callback';

export class CollectionTask {
    private secret_manager: AbstractSecretManager;
    private registry_server: RegistryServer;
    private job: CronJob;

    constructor(secret_manager: AbstractSecretManager) {
        this.secret_manager = secret_manager;
        this.registry_server = RegistryServer.getInstance();

        const onTick = async () => {
            console.log('Collection Task wakes up!');

            // Get all credentials on which we need to collect invoices
            let credential_ids = await IcCredential.getCredentialsIdToCollect()
            console.log(`Found ${credential_ids.length} credentials to collect`);

            // Collect invoices for each credential one by one
            for (const credential_id of credential_ids) {
                try {
                    await this.collect(credential_id);
                }
                catch (err) {
                    console.error(`Invoice collection for credential ${credential_id} has failed`);
                    console.error(err);
                }
            }
        }

        this.job = new CronJob('0 * * * *', onTick, null, false, 'Europe/Paris');
        this.start();
    }

    public start() {
        this.job.start();
        console.log('Collection Task started! Invoice collection will be performed every hour.');
    }

    public stop() {
        this.job.stop();
    }

    async collect(credential_id: string) {
        let credential: IcCredential|null = null;
        let customer;
        try {
            // Get credential from credential_id
            credential = await IcCredential.fromId(credential_id);

            console.log(`Collecting invoices for ${credential_id} (${credential?.collector_id})`);

            // Check if credential exists
            if (!credential) {
                throw new Error(`Credential with id "${credential_id}" not found.`);
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
            const secret = await this.secret_manager.getSecret(credential.secret_manager_id);

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
            const newInvoices = await collector.collect_new_invoices(secret, !first_collect, previousInvoices, user.locale, user.location);
                    
            console.log(`Invoice collection for credential ${credential_id} succeed`);

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
            this.registry_server.logSuccess(collector.config.id);

            // Update last collect
            credential.last_collect_timestamp = Date.now();

            // Compute next collect
            credential.computeNextCollect();
        }
        catch (err) {
            // If error is NoInvoiceFoundError
            if (err instanceof NoInvoiceFoundError) {
                console.warn(`Invoice collection for credential ${credential_id} succeed BUT no invoice found, collector may be broken`);
                this.registry_server.logError(customer.bearer, err);

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
                console.warn(`Invoice collection for credential ${credential_id} has failed: ${err.message}`);
                this.registry_server.logError(customer.bearer, err);

                // If credential exists
                if (credential) {
                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 week
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_WEEK_MS;
                }
            }
            else if (err instanceof AuthenticationError) {
                console.warn(`Invoice collection for credential ${credential_id} has failed: ${err.message}`);
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
                console.warn(`Invoice collection for credential ${credential_id} has failed: ${err.message}`);
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
    }
}
