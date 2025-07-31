import { StatusError, AuthenticationBearerError } from "../error";
import { DatabaseFactory } from "../database/databaseFactory";
import * as utils from "../utils";
import { User } from "./user";
import { CollectorLoader } from "../collectors/collectorLoader";
import { Server } from "../server";
import { Plan } from "./plan";

export enum Theme {
    DEFAULT = 'default',
    OCEAN = 'ocean'
}

export interface Stats {
    users: number;
    credentials: number;
    invoicesThisMonth: number;
}
export class Customer {

    static DEFAULT_NAME = "default";
    static DEFAULT_CALLBACK = "https://path.to/callback";

    static async fromBearer(hashed_bearer: string): Promise<Customer> {
        // Get customer from bearer
        const customer = await DatabaseFactory.getDatabase().getCustomerFromBearer(hashed_bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        return customer;
    }

    static async fromEmail(email: string): Promise<Customer|null> {
        // Get customer from email
        return await DatabaseFactory.getDatabase().getCustomerFromEmail(email);
    }

    static async fromEmailAndPassword(email: string, password: string): Promise<Customer|null> {
        // Get customer from email and password
        return await DatabaseFactory.getDatabase().getCustomerFromEmailAndPassword(email, password);
    }

    static async createDefault(): Promise<{bearer: string, customer: Customer}> {
        const bearer = utils.generate_bearer();
        const customer = new Customer("", "", Customer.DEFAULT_NAME, Customer.DEFAULT_CALLBACK, "", utils.hash_string(bearer));
        return {
            bearer,
            customer: await DatabaseFactory.getDatabase().createCustomer(customer)
        }
    }

    id: string;
    email: string;
    password: string;
    name: string;
    callback: string;
    remoteId: string;
    bearer: string;
    theme: Theme;
    subscribedCollectors: string[];
    isSubscribedToAll: boolean;
    displaySketchCollectors: boolean;
    maxDelayBetweenCollect: number;
    plan: Plan;

    constructor(
        email: string,
        password: string,
        name: string,
        callback: string,
        remoteId: string,
        bearer: string,
        theme: Theme = Theme.DEFAULT,
        subscribedCollectors: string[] = [],
        isSubscribedToAll: boolean = true,
        displaySketchCollectors: boolean = false,
        maxDelayBetweenCollect: number = 2592000000,
        plan: Plan = Server.IS_SELF_HOSTED ? Plan.FREE : Plan.TRIAL
    ) {
        this.id = "";
        this.email = email;
        this.password = password;
        this.name = name;
        this.callback = callback;
        this.remoteId = remoteId;
        this.bearer = bearer;
        this.theme = theme;
        this.subscribedCollectors = subscribedCollectors;
        this.isSubscribedToAll = isSubscribedToAll;
        this.displaySketchCollectors = displaySketchCollectors;
        this.maxDelayBetweenCollect = maxDelayBetweenCollect;
        this.plan = plan;
    }

    async getUserFromRemoteId(remote_id: string) {
        return await DatabaseFactory.getDatabase().getUserFromCustomerIdAndRemoteId(this.id, remote_id);
    }

    async getUsers(): Promise<User[]> {
        return await DatabaseFactory.getDatabase().getUsers(this.id);
    }

    async getUser(user_id: string) {
        return await DatabaseFactory.getDatabase().getUserBellongingToCustomer(user_id, this.id);
    }

    async getStats(): Promise<Stats|null> {
        return await DatabaseFactory.getDatabase().getCustomerStats(this.id);
    }

    setTheme(theme: string) {
        //Check if theme is supported
        if(!Object.values(Theme).includes(theme as Theme)) {
            throw new StatusError(`Theme "${theme}" not supported. Available themes are: ${Object.values(Theme).join(", ")}.`, 400);
        }

        this.theme = theme as Theme;
    }

    setSubscribedCollectors(collectors: string[]) {
        // Check if collectors is an array
        if (!Array.isArray(collectors)) {
            throw new StatusError(`Collectors must be an array.`, 400);
        }

        // Get existing collectors
        const valid_collectors = CollectorLoader.getAll().map((collector) => collector.config.id);

        // For each collector, check if it exists
        for (const collector of collectors) {
            if (!valid_collectors.includes(collector)) {
                throw new StatusError(`Collector "${collector}" does not exist.`, 400);
            }
        }

        // Set collectors
        this.subscribedCollectors = collectors;
    }

    async commit() {
        if (this.id) {
            // Update existing customer
            await DatabaseFactory.getDatabase().updateCustomer(this);
        }
        else {
            // Create customer
            await DatabaseFactory.getDatabase().createCustomer(this);
        }
    }

    async canAddUser(): Promise<boolean> {
        // TODO: Compare stats with plan
        return true;
    }

    async canAddCredential(): Promise<boolean> {
        // TODO: Compare stats with plan
        return true;
    }
}
