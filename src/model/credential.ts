import { Temporal} from '@js-temporal/polyfill';
import { CompleteInvoice } from "../collectors/abstractCollector";
import { DatabaseFactory } from "../database/databaseFactory";
import { StatusError } from "../error";
import * as utils from "../utils"; 
import { User } from "./user";

export class State {

    static SUCCESS_LEVEL: number = 7;

    static _2_DISCONNECTED: State = new State(-2, "i18n.class.state.2_disconnected", "i18n.class.state.2_disconnected.message");
    static _1_ERROR: State = new State(-1, "i18n.class.state.1_error", "");
    static _0_UNKNOWN: State = new State(0, "i18n.class.state.0_unknown", "");
    static _1_PREPARING: State = new State(1, "i18n.class.state.1_preparing", "");
    static _2_LOGGING_IN : State = new State(2, "i18n.class.state.2_logging_in", "");
    static _3_2FA_WAITING : State = new State(3, "i18n.class.state.3_2fa_waiting", "");
    static _4_2FA_PROCEEDING : State = new State(4, "i18n.class.state.4_2fa_proceeding", "");
    static _5_COLLECTING : State = new State(5, "i18n.class.state.5_collecting", "");
    static _6_DOWNLOADING : State = new State(6, "i18n.class.state.6_downloading", "");
    static _7_DONE : State = new State(7, "i18n.class.state.7_done", "");

    static DEFAULT_STATE: State = State._0_UNKNOWN;

    static fromObject(obj: object): State {
        let state = new State(obj["index"], obj["title"], obj["message"]);
        state.max = obj["max"];
        return state;
    }

    index: number;
    max: number;
    title: string;
    message: string;

    constructor(index: number, title: string, message: string) {
        this.index = index;
        this.max = State.SUCCESS_LEVEL;
        this.title = title;
        this.message = message;
    }

    // Use update method to update the state values without creating a new instance
    update(state: State, message?: string) {
        // Set state if in error or if current state is not the maximum
        if (state.index < 0 || this.index != this.max) {
            this.index = state.index;
            this.max = state.max;
            this.title = state.title;
            this.message = message ? utils.trim(message) : state.message;
        }
    }

    isError(): boolean {
        return this.index < 0;
    }
}

export class IcCredential {

    static ONE_DAY_MS: number = 86400000;
    static ONE_WEEK_MS: number = 604800000;

    static async fromId(id: string): Promise<IcCredential|null> {    
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
    secret_manager_id: string;
    create_timestamp: number;
    last_collect_timestamp: number;
    next_collect_timestamp: number;
    invoices: { id: string; datetime: string, collected_timestamp: number | null }[];
    state: State;

    constructor(
        user_id: string,
        collector_id: string,
        note: string,
        secret_manager_id: string,
        create_timestamp: number = Date.now(),
        last_collect_timestamp: number = Number.NaN,
        next_collect_timestamp: number = Number.NaN,
        invoices: { id: string; datetime: string, collected_timestamp: number | null }[] = [],
        state: State = State.DEFAULT_STATE
    ) {
        this.id = "";
        this.user_id = user_id;
        this.collector_id = collector_id;
        this.note = note;
        this.secret_manager_id = secret_manager_id;
        this.create_timestamp = create_timestamp;
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
                        sum += Temporal.Instant.from(invoices[i].datetime).since(Temporal.Instant.from(invoices[i-1].datetime)).total("milliseconds");
                    }
                    let avg = sum / (invoices.length - 1);

                    // Compute theoretical next collect timestamp
                    theoretical_next_collect_timestamp = Temporal.Instant.from(invoices[invoices.length - 1].datetime).add({milliseconds: avg}).epochMilliseconds;

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
            datetime: invoice.datetime,
            collected_timestamp: invoice.collected_timestamp
        });
    }

    sortInvoices() {
        // Order invoices by datetime
        this.invoices.sort((a, b) => Temporal.Instant.compare(Temporal.Instant.from(a.datetime), Temporal.Instant.from(b.datetime)));
    }
}
