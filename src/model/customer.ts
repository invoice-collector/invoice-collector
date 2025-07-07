import { StatusError, AuthenticationBearerError } from "../error";
import { DatabaseFactory } from "../database/databaseFactory";
import * as utils from "../utils";
import { User } from "./user";
import { CollectorLoader } from "../collectors/collectorLoader";

export enum Theme {
    DEFAULT = 'default',
    OCEAN = 'ocean'
}

export class Customer {

    static DEFAULT_NAME = "default";
    static DEFAULT_CALLBACK = "https://path.to/callback";

    static async fromBearer(bearer): Promise<Customer> {
        // Check if bearer is missing or does not start with "Bearer "
        if(!bearer || !bearer.startsWith("Bearer ")) {
            throw new AuthenticationBearerError()
        }

        // Get hash from bearer
        const hashed_bearer = utils.hash_string(bearer.split(' ')[1]);
    
        // Get customer from bearer
        const customer = await DatabaseFactory.getDatabase().getCustomerFromBearer(hashed_bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        return customer;
    }

    static async createDefault(): Promise<{bearer: string, customer: Customer}> {
        const bearer = utils.generate_bearer();
        const customer = new Customer(Customer.DEFAULT_NAME, Customer.DEFAULT_CALLBACK, utils.hash_string(bearer));
        return {
            bearer,
            customer: await DatabaseFactory.getDatabase().createCustomer(customer)
        }
    }

    id: string;
    name: string;
    callback: string;
    bearer: string;
    theme: Theme;
    collectors: string[];

    constructor(name: string, callback: string, bearer: string, theme: Theme = Theme.DEFAULT, collectors: string[] = []) {
        this.id = "";
        this.name = name;
        this.callback = callback;
        this.bearer = bearer;
        this.theme = theme;
        this.collectors = collectors;
    }

    async getUserFromRemoteId(remote_id: string) {
        return await DatabaseFactory.getDatabase().getUserFromCustomerIdAndRemoteId(this.id, remote_id);
    }

    async getUsers(): Promise<User[]> {
        return await DatabaseFactory.getDatabase().getUsers(this.id);
    }

    setTheme(theme: string) {
        //Check if theme is supported
        if(!Object.values(Theme).includes(theme as Theme)) {
            throw new StatusError(`Theme "${theme}" not supported. Available themes are: ${Object.values(Theme).join(", ")}.`, 400);
        }

        this.theme = theme as Theme;
    }

    setCollectors(collectors: string[]) {
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
        this.collectors = collectors;
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
}
