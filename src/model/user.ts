import { DatabaseFactory } from '../database/databaseFactory';
import { StatusError } from '../error';
import { Location } from '../proxy/abstractProxy';
import { SecretManagerFactory } from '../secret_manager/secretManagerFactory';
import { Credential } from './credential';
import { Customer } from './customer';
import { Callback } from './callback';
import { CollectorLoader } from '../collectors/collectorLoader';
import { CollectorType } from '../collectors/abstractCollector';

export enum UserStatus {
    ACTIVE = 'active',
    PENDING = 'pending',
    ERROR = 'error'
}

export interface UserStats {
    credentials: number;
    invoices: number;
    status: UserStatus;
}

export class User {

    static DEFAULT_PASSWORD = '';
    static DEFAULT_NAME = '';
    static DEFAULT_CID = '';

    /**
     * Gets a user from its ID.
     * @param id The ID of the user to retrieve.
     * @returns The User instance if found, or null otherwise.
     */
    static async fromId(id: string): Promise<User|null> {
        // Get user from id
        return await DatabaseFactory.getDatabase().getUser(id);
    }

    /**
     * Gets a user from its remote ID.
     * @param remoteId The remote ID of the user to retrieve.
     * @returns The User instance if found, or null otherwise.
     */
    static async fromRemoteId(remoteId: string): Promise<User|null> {
        // Get user from remote_id
        return await DatabaseFactory.getDatabase().getUserFromRemoteId(remoteId);
    }

    /**
     * Gets a user from its remote ID and password.
     * @param remoteId The remote ID of the user to retrieve.
     * @param password The password of the user to retrieve.
     * @returns The User instance if found, or null otherwise.
     */
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

    /**
     * Constructs a new User instance.
     * @param customer_id The ID of the customer the user belongs to.
     * @param remote_id The remote ID of the user.
     * @param password The hashed password of the user.
     * @param name The name of the user.
     * @param cid The company ID of the user.
     * @param location The location of the user.
     * @param locale The locale of the user.
     * @param createdAt The creation timestamp of the user.
     */
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
        this.id = '';
        this.customer_id = customer_id;
        this.remote_id = remote_id;
        this.password = password;
        this.name = name;
        this.cid = cid;
        this.location = location;
        this.locale = locale;
        this.createdAt = createdAt;
    }

    /**
     * Gets the customer the user belongs to.
     * @returns The Customer the user belongs to.
     * @throws StatusError if the customer cannot be found.
     */
    async getCustomer(): Promise<Customer> {
        const customer = await DatabaseFactory.getDatabase().getCustomer(this.customer_id);
            
        // Check if customer exists
        if(!customer) {
            throw new StatusError(`Could not find customer for user with id "${this.id}".`, 400);
        }
        return customer;
    }

    /**
     * Gets the credential with the specified ID.
     * @param credential_id The ID of the credential to retrieve.
     * @returns The Credential with the specified ID, or null if not found.
     */
    async getCredential(credential_id: string): Promise<Credential | null> {
        return await DatabaseFactory.getDatabase().getCredential(credential_id);
    }

    /**
     * Gets all credentials associated with the user.
     * @returns An array of Credential instances associated with the user.
     */
    async getCredentials(): Promise<Credential[]> {
        return await DatabaseFactory.getDatabase().getCredentials(this.id);
    }

    /**
     * Gets all credentials of the user whose collector is an email provider (mailbox connection).
     * @returns An array of Credential instances that are email providers.
     */
    async getProviders(): Promise<Credential[]> {
        const credentials = await this.getCredentials();
        const providers: Credential[] = [];

        for (const credential of credentials) {
            try {
                const config = await CollectorLoader.getConfig(credential.collector_id);
                if (config.type === CollectorType.PROVIDER) {
                    providers.push(credential);
                }
            }
            catch {
                continue;
            }

        }

        return providers;
    }

    /**
     * Gets all callbacks associated with the user.
     * @returns An array of Callback instances associated with the user.
     */
    async getCallbacks(): Promise<Callback[]> {
        return DatabaseFactory.getDatabase().getCallbacks(this.id);
    }

    /**
     * Commits the current state of the user to the database.
     * Creates a new user entry if it does not already exist.
     * Updates the existing entry otherwise.
     */
    async commit(): Promise<void> {
        if (this.id) {
            // Update existing user
            await DatabaseFactory.getDatabase().updateUser(this);
        }
        else {
            // Create user
            await DatabaseFactory.getDatabase().createUser(this);
        }
    }

    /**
     * Deletes the user along with all associated credentials and secrets.
     */
    async delete() {
        // Get all credentials ids
        const credentials: Credential[] = await this.getCredentials();
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

    /**
     * Gets the statistics for the user.
     * @returns An object containing the user's statistics.
     */
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
            invoices,
            status,
        };
    }
}