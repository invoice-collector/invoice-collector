import { CompleteInvoice } from '../collectors/abstractCollector';
import { DatabaseFactory } from '../database/databaseFactory';
import { StatusError } from '../error';
import { SecretManagerFactory } from '../secret_manager/secretManagerFactory';
import { Secret } from './secret';
import { State } from './state';
import { User } from './user';

export type ModelInvoice = {
    id: string,
    timestamp: number,
    collected_timestamp: number | null,
    hash: string | null
}

export class Credential {

    static ONE_DAY_MS: number = 86400000;
    static ONE_WEEK_MS: number = 604800000;

    static async fromId(id: string): Promise<Credential | null> {
        // Get customer from bearer
        return await DatabaseFactory.getDatabase().getCredential(id);
    }

    static async getCredentialsIdToCollect(): Promise<string[]> {
        return await DatabaseFactory.getDatabase().getCredentialsIdToCollect();
    }

    id: string;
    user_id: string;
    collector_id: string;
    note: string;
    secret_id: string;
    create_timestamp: number;
    download_from_timestamp: number;
    last_collect_timestamp: number;
    next_collect_timestamp: number;
    invoices: ModelInvoice[];
    state: State;

    /**
     * Constructs a new instance of the Credential class.
     * @param user_id The ID of the user associated with the credential.
     * @param collector_id The ID of the collector associated with the credential.
     * @param note A note associated with the credential.
     * @param secret_id The ID of the secret associated with the credential.
     * @param create_timestamp The timestamp when the credential was created.
     * @param download_from_timestamp The timestamp from which to start downloading invoices.
     * @param last_collect_timestamp The timestamp of the last collection.
     * @param next_collect_timestamp The timestamp of the next planned collection.
     * @param invoices The list of invoices associated with the credential.
     * @param state The state of the credential.
     */
    constructor(
        user_id: string,
        collector_id: string,
        note: string,
        secret_id: string,
        create_timestamp: number,
        download_from_timestamp: number,
        last_collect_timestamp: number = Number.NaN,
        next_collect_timestamp: number = Number.NaN,
        invoices: ModelInvoice[] = [],
        state: State = State.DEFAULT_STATE,
    ) {
        this.id = '';
        this.user_id = user_id;
        this.collector_id = collector_id;
        this.note = note;
        this.secret_id = secret_id;
        this.create_timestamp = create_timestamp;
        this.download_from_timestamp = download_from_timestamp;
        this.last_collect_timestamp = last_collect_timestamp;
        this.next_collect_timestamp = next_collect_timestamp;
        this.invoices = invoices;
        this.state = state;
    }

    /**
     * Gets the user the credential belongs to.
     * @returns The user the credential belongs to.
     */
    async getUser(): Promise<User> {
        const user = await DatabaseFactory.getDatabase().getUser(this.user_id);
    
        // Check if user exists
        if(!user) {
            throw new StatusError(`Could not find user for credential with id "${this.id}".`, 400);
        }
        return user;
    }

    /**
     * Gets the secret associated with the credential.
     * @returns The secret associated with the credential.
     */
    getSecret(): Secret {
        const secret = new Secret(`${this.id}_${this.user_id}_${this.collector_id}`);
        secret.id = this.secret_id;
        return secret;
    }

    /**
     * Deletes the credential and its associated secret from the database and secret manager.
     */
    async delete() {
        // Delete secret from Secret Manager
        await SecretManagerFactory.getSecretManager().deleteSecret(this.secret_id);
        // Delete credential from database
        await DatabaseFactory.getDatabase().deleteCredential(this.user_id, this.id);
    }

    /**
     * Commits the current state of the credential to the database.
     * Creates a new credential entry if it does not already exist.
     * Updates the existing entry otherwise.
     */
    async commit() {
        if (this.id) {
            // Update existing credential
            await DatabaseFactory.getDatabase().updateCredential(this);
        }
        else {
            // Create credential
            await DatabaseFactory.getDatabase().createCredential(this);
        }
    }

    /**
     * Computes the next collection timestamp for the credential based on the historical invoice collection data.
     * @param maxDelayBetweenCollect The maximum allowed delay between collections in milliseconds.
     */
    computeNextCollect(maxDelayBetweenCollect: number) {
        // If not in error
        if (!this.state.isError()) {
            // If last_collect_timestamp and next_collect_timestamp are NaN, the invoices has never been collected
            if (isNaN(this.last_collect_timestamp) && isNaN(this.next_collect_timestamp)) {
                // Plan the next collection now
                this.next_collect_timestamp = this.create_timestamp;
            }
            // If the planned next collect is before the last collect or the next collect has never been planned
            else if (this.next_collect_timestamp < this.last_collect_timestamp || isNaN(this.next_collect_timestamp)) {
                let theoretical_next_collect_timestamp;

                // Compute maximum next collect timestamp from now
                const max_next_collect_timestamp = this.last_collect_timestamp + maxDelayBetweenCollect;

                // If has less than 2 invoices, average time between invoices cannot be computed
                if (this.invoices.length < 2) {
                    // Plan the next collect in one week
                    theoretical_next_collect_timestamp = this.last_collect_timestamp + Credential.ONE_WEEK_MS;
                }
                else { // If has more than 2 invoices
                    // Take the last 10 invoices
                    const invoices = this.invoices.slice(-10);

                    // Compute the average time between invoices
                    let sum = 0;
                    for (let i = 1; i < invoices.length; i++) {
                        sum += invoices[i].timestamp - invoices[i-1].timestamp;
                    }
                    const avg = sum / (invoices.length - 1);

                    // Compute theoretical next collect timestamp
                    theoretical_next_collect_timestamp = invoices[invoices.length - 1].timestamp + avg;

                    // If theoretical next collect timestamp is before last collect timestamp, plan the next collect in one week
                    if (theoretical_next_collect_timestamp < this.last_collect_timestamp) {
                        theoretical_next_collect_timestamp = this.last_collect_timestamp + Credential.ONE_WEEK_MS;
                    }
                }

                // Plan the next collect in the average time between invoices
                this.next_collect_timestamp = isNaN(theoretical_next_collect_timestamp) ? max_next_collect_timestamp : Math.min(theoretical_next_collect_timestamp, max_next_collect_timestamp);
            }
        }
        else {
            // Cancel next collect
            this.next_collect_timestamp = Number.NaN;
        }
    }

    /**
     * Adds a new invoice to the credential's invoice list.
     * @param invoice The invoice to be added to the credential's invoice list.
     */
    addInvoice(invoice: CompleteInvoice): void {
        this.invoices.push({
            id: invoice.id,
            timestamp: invoice.timestamp,
            collected_timestamp: invoice.collected_timestamp,
            hash: invoice.hash,
        });
    }

    /**
     * Sorts the credential's invoice list by the timestamp of each invoice in ascending order.
     */
    sortInvoices(): void {
        // Order invoices by timestamp
        this.invoices.sort((a, b) => a.timestamp - b.timestamp);
    }
}
