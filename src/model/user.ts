import { DatabaseFactory } from "../database/databaseFactory";
import { StatusError } from "../error";
import { Location } from "../proxy/abstractProxy";
import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";
import { IcCredential } from "./credential";
import { Customer } from "./customer";

export enum UserStatus {
    ACTIVE = "active",
    PENDING = "pending",
    ERROR = "error"
}

export interface UserStats {
    credentials: number;
    invoices: number;
    status: UserStatus;
}

export class User {

    static DEFAULT_PASSWORD = "";
    static DEFAULT_NAME = "";
    static DEFAULT_CID = "";

    static async fromId(id: string): Promise<User|null> {
        // Get user from id
        return await DatabaseFactory.getDatabase().getUser(id);
    }

    static async fromRemoteId(remoteId: string): Promise<User|null> {
        // Get user from remote_id
        return await DatabaseFactory.getDatabase().getUserFromRemoteId(remoteId);
    }

    static async fromRemoteIdAndPassword(remoteId: string, password: string): Promise<User|null> {
        // Get user from remote_id and password
        return await DatabaseFactory.getDatabase().getUserFromRemoteIdAndPassword(remoteId, password);
    }

    id: string;
    customer_id: string;
    remote_id: string;
    password: string;
    name: string;
    cid: string;
    location: Location | null;
    locale: string;
    createdAt: number;

    constructor(
        customer_id: string,
        remote_id: string,
        password: string,
        name: string,
        cid: string,
        location: Location | null,
        locale: string,
        createdAt: number,
    ) {
        this.id = "";
        this.customer_id = customer_id;
        this.remote_id = remote_id;
        this.password = password;
        this.name = name;
        this.cid = cid;
        this.location = location;
        this.locale = locale;
        this.createdAt = createdAt;
    }

    async getCustomer(): Promise<Customer> {
        const customer = await DatabaseFactory.getDatabase().getCustomer(this.customer_id);
            
        // Check if customer exists
        if(!customer) {
            throw new StatusError(`Could not find customer for user with id "${this.id}".`, 400);
        }
        return customer;
    }

    async getCredential(credential_id: string) {
        return await DatabaseFactory.getDatabase().getCredential(credential_id);
    }

    async getCredentials() {
        return await DatabaseFactory.getDatabase().getCredentials(this.id);
    }

    async commit() {
        if (this.id) {
            // Update existing user
            await DatabaseFactory.getDatabase().updateUser(this);
        }
        else {
            // Create user
            await DatabaseFactory.getDatabase().createUser(this);
        }
    }

    async delete() {
        // Get all credentials ids
        const credentials: IcCredential[] = await this.getCredentials();
        const secret_ids: string[] = credentials.map(credential => credential.secret_id);

        // Delete all secrets in secret manager
        if (secret_ids.length > 0) {
            await SecretManagerFactory.getSecretManager().deleteSecrets(secret_ids);
        }

        // Delete all credentials
        await DatabaseFactory.getDatabase().deleteCredentials(this.id);

        // Delete the user
        await DatabaseFactory.getDatabase().deleteUser(this.id);
    }

    async getStats(): Promise<UserStats> {
        // Get credentials
        const credentials = await this.getCredentials();

        // Get invoices count
        const invoices = credentials.reduce((acc, credential) => acc + credential.invoices.length, 0);

        // Compute status
        let status = UserStatus.ACTIVE;
        if(credentials.length === 0) {
            status = UserStatus.PENDING;
        }
        else if (credentials.some(credential => credential.state.isError())) {
            status = UserStatus.ERROR;
        }

        // Return stats
        return {
            credentials: credentials.length,
            invoices: invoices,
            status: status
        };
    }
}