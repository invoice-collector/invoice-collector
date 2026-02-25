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

export interface CustomerStats {
    users: number;
    credentials: number;
    invoices: number;
    byMonth: {
        [key: string]: {
            users: number;
            credentials: number;
            invoices: number;
        }
    };
    collectors: {
        [key: string]: number;
    };
}
export class Customer {

    static DEFAULT_EMAIL = "";
    static DEFAULT_PASSWORD = "";
    static DEFAULT_NAME = "default";
    static DEFAULT_CID = "";
    static DEFAULT_CALLBACK = "";
    static DEFAULT_REMOTE_ID = "";
    static DEFAULT_BEARER = "";
    static DEFAULT_SUBSCRIBED_COLLECTORS: string[] = [];
    static DEFAULT_IS_SUBSCRIBED_TO_ALL = true;
    static DEFAULT_ENABLE_INTERACTIVE_LOGIN = true;
    static DEFAULT_DISPLAY_SKETCH_COLLECTORS = true;
    static DEFAULT_MAX_DELAY_BETWEEN_COLLECT = 2592000000; // 30 days in milliseconds

    static async fromBearer(hashed_bearer: string): Promise<Customer> {
        // Get customer from bearer
        const customer = await DatabaseFactory.getDatabase().getCustomerFromBearer(hashed_bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        return customer;
    }

    static async fromId(id: string): Promise<Customer|null> {
        // Get customer from id
        return await DatabaseFactory.getDatabase().getCustomer(id);
    }

    static async fromEmail(email: string): Promise<Customer|null> {
        // Get customer from email
        return await DatabaseFactory.getDatabase().getCustomerFromEmail(email);
    }

    static async fromEmailAndPassword(email: string, password: string): Promise<Customer|null> {
        // Get customer from email and password
        return await DatabaseFactory.getDatabase().getCustomerFromEmailAndPassword(email, password);
    }

    static async fromInviteId(inviteId: string): Promise<Customer|null> {
        // Get customer from invite id
        return await DatabaseFactory.getDatabase().getCustomerFromInviteId(inviteId);
    }

    static async createDefault(): Promise<{bearer: string, customer: Customer}> {
        // Generate default api bearer
        const bearer = utils.generate_bearer(utils.BearerType.API);
        const customer = new Customer(
            Customer.DEFAULT_EMAIL,
            Customer.DEFAULT_PASSWORD,
            Customer.DEFAULT_NAME,
            Customer.DEFAULT_CID,
            Customer.DEFAULT_CALLBACK,
            Customer.DEFAULT_REMOTE_ID,
            utils.hash_string(bearer),
            utils.convertNameToInviteId(Customer.DEFAULT_NAME),
            Date.now()
        );
        return {
            bearer,
            customer: await DatabaseFactory.getDatabase().createCustomer(customer)
        }
    }

    id: string;
    email: string;
    password: string;
    name: string;
    cid: string;
    callback: string;
    remoteId: string;
    bearer: string;
    inviteId: string;
    createdAt: number;
    theme: Theme;
    subscribedCollectors: string[];
    isSubscribedToAll: boolean;
    enableInteractiveLogin: boolean;
    displaySketchCollectors: boolean;
    maxDelayBetweenCollect: number;
    plan: Plan;

    constructor(
        email: string,
        password: string,
        name: string,
        cid: string,
        callback: string,
        remoteId: string,
        bearer: string,
        inviteId: string,
        createdAt: number,
        theme: Theme = Theme.DEFAULT,
        subscribedCollectors: string[] = Customer.DEFAULT_SUBSCRIBED_COLLECTORS,
        isSubscribedToAll: boolean = Customer.DEFAULT_IS_SUBSCRIBED_TO_ALL,
        enableInteractiveLogin: boolean = Customer.DEFAULT_ENABLE_INTERACTIVE_LOGIN,
        displaySketchCollectors: boolean = Customer.DEFAULT_DISPLAY_SKETCH_COLLECTORS,
        maxDelayBetweenCollect: number = Customer.DEFAULT_MAX_DELAY_BETWEEN_COLLECT,
        plan: Plan = Server.IS_SELF_HOSTED ? Plan.FREE : Plan.TRIAL,
    ) {
        this.id = "";
        this.email = email;
        this.password = password;
        this.name = name;
        this.callback = callback;
        this.remoteId = remoteId;
        this.cid = cid;
        this.bearer = bearer;
        this.inviteId = inviteId;
        this.createdAt = createdAt;
        this.theme = theme;
        this.subscribedCollectors = subscribedCollectors;
        this.isSubscribedToAll = isSubscribedToAll;
        this.enableInteractiveLogin = enableInteractiveLogin;
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

    async getStats(): Promise<CustomerStats> {
        const stats = await DatabaseFactory.getDatabase().getCustomerStats(this.id);

        // Check if stats are null
        if (!stats) {
            throw new StatusError("Unable to compute customer stats", 500);
        }

        return stats;
    }

    setTheme(theme: string) {
        //Check if theme is supported
        if(!Object.values(Theme).includes(theme as Theme)) {
            throw new StatusError(`Theme "${theme}" not supported. Available themes are: ${Object.values(Theme).join(", ")}.`, 400);
        }

        this.theme = theme as Theme;
    }

    async setSubscribedCollectors(collectors: string[]) {
        // Order collectors alphabetically
        collectors.sort();

        // Check if collectors is an array
        if (!Array.isArray(collectors)) {
            throw new StatusError(`Collectors must be an array.`, 400);
        }

        // Get existing collectors
        const valid_collectors = (await CollectorLoader.getAll()).map((config) => config.id);

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
        // Get stats
        const stats = await this.getStats();
        // Check if user limit is reached
        return this.plan.maxUsers === -1 || stats.users < this.plan.maxUsers
    }

    async canAddCredential(): Promise<boolean> {
        // Get stats
        const stats = await this.getStats();
        // Check if credential limit is reached
        return this.plan.maxCredentials === -1 || stats.credentials < this.plan.maxCredentials;
    }
}
