import { CompleteInvoice } from "../collectors/abstractCollector";
import { DatabaseFactory } from "../database/databaseFactory";
import { StatusError } from "../error";
import { Secret } from "./secret";
import { State } from "./state";
import { User } from "./user";

export class IcCredential {

    static ONE_DAY_MS: number = 86400000;
    static ONE_WEEK_MS: number = 604800000;

    static async fromId(id: string): Promise<IcCredential | null> {
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
    secret: Secret;
    create_timestamp: number;
    download_from_timestamp: number;
    last_collect_timestamp: number;
    next_collect_timestamp: number;
    invoices: {
        id: string,
        timestamp: number,
        collected_timestamp: number | null,
        hash: string | null
    }[];
    state: State;

    constructor(
        user_id: string,
        collector_id: string,
        note: string,
        secret: Secret,
        create_timestamp: number,
        download_from_timestamp: number,
        last_collect_timestamp: number = Number.NaN,
        next_collect_timestamp: number = Number.NaN,
        invoices: {
            id: string,
            timestamp: number,
            collected_timestamp: number | null,
            hash: string | null
        }[] = [],
        state: State = State.DEFAULT_STATE
    ) {
        this.id = "";
        this.user_id = user_id;
        this.collector_id = collector_id;
        this.note = note;
        this.secret = secret;
        this.create_timestamp = create_timestamp;
        this.download_from_timestamp = download_from_timestamp;
        this.last_collect_timestamp = last_collect_timestamp;
        this.next_collect_timestamp = next_collect_timestamp;
        this.invoices = invoices;
        this.state = state;
    }

    async getUser(): Promise<User> {
        const user = await DatabaseFactory.getDatabase().getUser(this.user_id);
    
        // Check if user exists
        if(!user) {
            throw new StatusError(`Could not find user for credential with id "${this.id}".`, 400);
        }
        return user;
    }

    async delete() {
        // Delete secret from Secure Storage
        await this.secret.delete();
        // Delete credential from database
        await DatabaseFactory.getDatabase().deleteCredential(this.user_id, this.id);
    }

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

    computeNextCollect(maxDelayBetweenCollect: number) {
        // If not in error
        if (!this.state.isError()) {
            // If last_collect_timestamp and next_collect_timestamp are NaN, the invoices has never been collected
            if (isNaN(this.last_collect_timestamp) && isNaN(this.next_collect_timestamp)) {
                // Plan the next collection now
                this.next_collect_timestamp = this.create_timestamp;
            }
            else if (this.next_collect_timestamp < this.last_collect_timestamp) { // If next_collect_timestamp is before last_collect_timestamp
                let theoretical_next_collect_timestamp;

                // Compute maximum next collect timestamp from now
                let max_next_collect_timestamp = this.last_collect_timestamp + maxDelayBetweenCollect;

                // If has less than 2 invoices, average time between invoices cannot be computed
                if (this.invoices.length < 2) {
                    // Plan the next collect in one week
                    theoretical_next_collect_timestamp = this.last_collect_timestamp + IcCredential.ONE_WEEK_MS;
                }
                else { // If has more than 2 invoices
                    // Take the last 10 invoices
                    let invoices = this.invoices.slice(-10);

                    // Compute the average time between invoices
                    let sum = 0;
                    for (let i = 1; i < invoices.length; i++) {
                        sum += invoices[i].timestamp - invoices[i-1].timestamp;
                    }
                    let avg = sum / (invoices.length - 1);

                    // Compute theoretical next collect timestamp
                    theoretical_next_collect_timestamp = invoices[invoices.length - 1].timestamp + avg;

                    // If theoretical next collect timestamp is before last collect timestamp, plan the next collect in one week
                    if (theoretical_next_collect_timestamp < this.last_collect_timestamp) {
                        theoretical_next_collect_timestamp = this.last_collect_timestamp + IcCredential.ONE_WEEK_MS;
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

    addInvoice(invoice: CompleteInvoice) {
        this.invoices.push({
            id: invoice.id,
            timestamp: invoice.timestamp,
            collected_timestamp: invoice.collected_timestamp,
            hash: invoice.hash
        });
    }

    sortInvoices() {
        // Order invoices by timestamp
        this.invoices.sort((a, b) => a.timestamp - b.timestamp);
    }
}
