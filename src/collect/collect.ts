import { CallbackHandler } from "../callback/callback";
import { AbstractCollector, Config } from "../collectors/abstractCollector";
import { CollectorLoader } from "../collectors/collectorLoader";
import { AuthenticationError, DisconnectedError, LoggableError, MaintenanceError, NoInvoiceFoundError } from "../error";
import { IcCredential } from "../model/credential";
import { State } from "../model/state";
import { Customer } from "../model/customer";
import { User } from "../model/user";
import { RegistryServer } from "../registryServer";
import { TwofaPromise } from "./twofaPromise";
import { WebSocketServer } from '../websocket/webSocketServer';
import * as utils from "../utils";
import { Secret } from "../model/secret";

export class Collect {

    credential_id: string;
    state: State|undefined;
    twofa_promise: TwofaPromise;
    webSocketServer: WebSocketServer | undefined;

    constructor(credential_id: string, wss: WebSocketServer | undefined) {
        this.credential_id = credential_id;
        this.twofa_promise = new TwofaPromise();
        this.webSocketServer = wss;
    }

    async start(): Promise<void> {
        let credential: IcCredential|null = null;
        let user: User|null = null;
        let secret: Secret|null = null;
        let collector: AbstractCollector<Config>|null = null;
        let customer: Customer|null = null;

        try {
            // Get credential from credential_id
            credential = await IcCredential.fromId(this.credential_id);
            console.log(`Collecting invoices for ${this.credential_id}`);

            // Check if credential exists
            if (!credential) {
                throw new Error(`Credential with id "${this.credential_id}" not found.`);
            }

            // Set state from credential
            this.state = credential.state;

            // Get user from credential
            user = await credential.getUser();

            // Get customer from user
            customer = await user.getCustomer();

            // If customer has a valid callback url
            if (customer.callback) {
            
                // Set progress step to preparing
                credential.state.update(State._1_PREPARING);
                this.webSocketServer?.sendState(State._1_PREPARING);

                // Get secret from secret_manager_id
                secret = credential.getSecret();

                // Get collector from collector_id
                collector = await CollectorLoader.get(credential.collector_id);

                // Check if collector not found
                if(collector == null) {
                    throw new Error(`No collector with id "${credential.collector_id}" found.`);
                }
                console.log(`Using collector ${collector.config.id} version ${collector.config.version}`);

                // Set collector for twofa promise
                this.twofa_promise.collector = collector;

                // Collect invoices
                const newInvoices = await collector.collect_new_invoices(
                    this.state,
                    this.twofa_promise,
                    this.webSocketServer,
                    secret,
                    credential.download_from_timestamp,
                    credential.invoices,
                    user.location,
                    customer.enableInteractiveLogin
                );
                console.log(`Found ${credential.invoices.length + newInvoices.length} invoices during collect and ${newInvoices.length} new`);
                console.log(`Invoice collection for credential ${this.credential_id} succeed`);

                // If at least one new invoice has been downloaded
                if(newInvoices.length > 0) {
                    // Get previous invoices hash
                    const previousInvoicesHash = credential.invoices.map(inv => inv.hash);

                    // Loop through invoices
                    for (const [index, invoice] of newInvoices.entries()) {
                        // If data downloaded and invoice is more recent than the download_from_timestamp
                        if (invoice.data && credential.download_from_timestamp <= invoice.timestamp && !previousInvoicesHash.includes(invoice.hash)) {
                            console.log(`Sending invoice ${index + 1}/${newInvoices.length} (${invoice.id}) to callback`);

                            try {
                                // Send invoice to callback
                                const callback = new CallbackHandler(customer);
                                await callback.sendInvoice(credential.collector_id, user.remote_id, invoice);

                                // Add invoice to credential only if callback successfully reached
                                credential.addInvoice(invoice);

                                // Wait 1 second between each callback to avoid overwhelming the callback server
                                await utils.delay(1000);
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

                // Set progress step to done
                credential.state.update(State._7_DONE);
                this.webSocketServer?.sendState(State._7_DONE);

                // Log success
                RegistryServer.getInstance().logSuccess(collector);
            }
            else {
                console.warn(`Customer ${customer.id} has no valid callback, skipping collect for credential ${this.credential_id} and planning next collect`);
            }

            // Update last collect
            credential.last_collect_timestamp = Date.now();

            // Compute next collect
            credential.computeNextCollect(customer.maxDelayBetweenCollect);
        }
        catch (err) {
            // If error is NoInvoiceFoundError
            if (err instanceof NoInvoiceFoundError) {
                console.warn(`Invoice collection for credential ${this.credential_id} succeed BUT no invoice found, collector may be broken`);
                RegistryServer.getInstance().logError(customer?.email || "", user?.remote_id || "", err);

                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state.update(State._7_DONE);
                    this.webSocketServer?.sendState(State._7_DONE);

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
                RegistryServer.getInstance().logError(customer?.email || "", user?.remote_id || "", err);

                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state.update(State._0_UNKNOWN);
                    this.webSocketServer?.sendState(State._0_UNKNOWN);

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Schedule next collect in 1 day
                    credential.next_collect_timestamp = credential.last_collect_timestamp + IcCredential.ONE_DAY_MS;
                }
            }
            else if (err instanceof AuthenticationError || err instanceof DisconnectedError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                // If credential exists
                if (credential && user && customer) {
                    // If error occurs and previous collect was successful, send notification
                    if (credential.state.index >= credential.state.max) {
                        // Send disconnected notification to callback without waiting
                        // If it fails, it will be caught by the callback handler and logged
                        const callback = new CallbackHandler(customer);
                        callback.sendNotificationDisconnected(credential.collector_id, credential.id, user.id, user.remote_id);
                    }

                    // If authentication error
                    if (err instanceof AuthenticationError) {
                        // Update credential to error
                        credential.state.update(State._1_ERROR, err.message);
                        this.webSocketServer?.sendState(State._1_ERROR, err.message);
                    }
                    // If disconnected error
                    else {
                        // Update credential to disconnected
                        credential.state.update(State._2_DISCONNECTED);
                        this.webSocketServer?.sendState(State._2_DISCONNECTED);
                    }

                    // Update last collect
                    credential.last_collect_timestamp = Date.now();

                    // Cancel next collect
                    credential.next_collect_timestamp = Number.NaN;

                    // Reset cookies and localStorage
                    await secret?.setCookies(null);
                    await secret?.setLocalStorage(null);
                }
            }
            else if (err instanceof MaintenanceError) {
                console.warn(`Invoice collection for credential ${this.credential_id} has failed: ${err.message}`);
                // If credential exists
                if (credential) {
                    // Update credential
                    credential.state.update(State._0_UNKNOWN);
                    this.webSocketServer?.sendState(State._0_UNKNOWN);

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
                    this.webSocketServer?.sendState(State._0_UNKNOWN);
                }
            }
        }
        finally {
            // Commit credential
            await credential?.commit();
            // Commit secret
            await secret?.commit();
        }
    }
}
