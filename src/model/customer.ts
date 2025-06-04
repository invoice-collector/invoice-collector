import { AuthenticationBearerError } from "../error";
import { DatabaseFactory } from "../database/databaseFactory";
import * as utils from "../utils";
import { User } from "./user";

export enum Theme {
    DEFAULT = 'default',
    OCEAN = 'ocean'
}

export class Customer {

    static DEFAULT_NAME = "default";
    static DEFAULT_CALLBACK = "https://path.to/callback";

    static async fromBearer(bearer): Promise<Customer|null> {
        console.log('Received bearer:', bearer);
        
        // Check if bearer is missing or does not start with "Bearer "
        if(!bearer || !bearer.startsWith("Bearer ")) {
            console.log('Bearer validation failed: missing or wrong format');
            throw new AuthenticationBearerError()
        }

        // Get hash from bearer
        const token = bearer.split(' ')[1];
        console.log('Token part:', token);
        const hashed_bearer = utils.hash_string(token);
        console.log('Hashed bearer:', hashed_bearer);
    
        // Get customer from bearer
        const customer = await DatabaseFactory.getDatabase().getCustomerFromBearer(hashed_bearer);
        console.log('Found customer:', customer ? 'yes' : 'no');
        
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

    constructor(name: string, callback: string, bearer: string, theme: Theme = Theme.DEFAULT) {
        this.id = "";
        this.name = name;
        this.callback = callback;
        this.bearer = bearer;
        this.theme = theme;
    }

    async getUserFromRemoteId(remote_id: string) {
        return await DatabaseFactory.getDatabase().getUserFromCustomerIdAndRemoteId(this.id, remote_id);
    }

    async getUsers(): Promise<User[]> {
        return await DatabaseFactory.getDatabase().getUsers(this.id);
    }
}
