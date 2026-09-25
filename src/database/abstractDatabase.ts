import { Customer, CustomerStats } from '../model/customer';
import { User } from '../model/user';
import { Credential, ModelInvoice } from '../model/credential';
import { CollectorMemory } from '../model/collectorMemory';
import { Callback } from '../model/callback';



export type AllCustomerData = {
    users: ({
        credentials: ({
            invoices: ModelInvoice[];
        } & Credential)[];
    } & User)[];
} & Customer;

export abstract class AbstractDatabase {

    /**
     * Creates an instance of the abstract database class.
     */
    protected constructor() {}

    /**
     * Connects to the database.
     * @param throwOnError Whether to throw an error if the connection fails.
     */
    abstract connect(throwOnError?: boolean): Promise<void>;

    /**
     * Disconnects from the database.
     */
    abstract disconnect(): Promise<void>;

    /**
     * Pings the database to check if it is reachable.
     * @throws An error if the database is not reachable.
     */
    abstract ping(): Promise<void>;

    // COUNTERS

    /**
     * Gets the value of the specified counter.
     * @param counterName The name of the counter to retrieve. Creates the counter if it does not exist.
     * @returns The value of the counter.
     */
    abstract getCounter(counterName: string): Promise<number>;

    // CUSTOMER

    /**
     * Counts the number of customers in the database.
     * @returns The total number of customers.
     */
    abstract countCustomers(): Promise<number>;

    /**
     * Gets all customers from the database.
     * @returns An array of all customers.
     */
    abstract getAllCustomers(): Promise<Customer[]>;

    /**
     * Creates a new customer in the database.
     * @param customer The customer to create.
     * @returns The created customer.
     */
    abstract createCustomer(customer: Customer): Promise<Customer>;

    /**
     * Gets the customer associated with the given bearer token.
     * @param bearer The bearer token to use for retrieving the customer.
     * @returns The customer associated with the given bearer token, or null if not found.
     */
    abstract getCustomerFromBearer(bearer: string): Promise<Customer|null>;
    
    /**
     * Gets the customer associated with the given email.
     * @param email The email to use for retrieving the customer.
     * @returns The customer associated with the given email, or null if not found.
     */
    abstract getCustomerFromEmail(email: string): Promise<Customer|null>;

    /**
     * Gets the customer associated with the given email and password.
     * @param email The email to use for retrieving the customer.
     * @param password The password to use for retrieving the customer.
     * @returns The customer associated with the given email and password, or null if not found.
     */
    abstract getCustomerFromEmailAndPassword(email: string, password: string): Promise<Customer|null>;

    /**
     * Gets the customer associated with the given invite ID.
     * @param inviteId The invite ID to use for retrieving the customer.
     * @returns The customer associated with the given invite ID, or null if not found.
     */
    abstract getCustomerFromInviteId(inviteId: string): Promise<Customer|null>;

    /**
     * Gets the customer associated with the given customer ID.
     * @param customer_id The customer ID to use for retrieving the customer.
     * @returns The customer associated with the given customer ID, or null if not found.
     */
    abstract getCustomer(customer_id: string): Promise<Customer|null>;

    /**
     * Updates the given customer in the database.
     * @param customer The customer to update.
     */
    abstract updateCustomer(customer: Customer): Promise<void>;

    /**
     * Gets the statistics associated with the given customer ID.
     * @param customer_id The customer ID to use for retrieving the statistics.
     * @returns The statistics associated with the given customer ID.
     */
    abstract getCustomerStats(customer_id: string): Promise<CustomerStats>;

    /**
     * Gets all the data associated with the given customer ID.
     * @param customer_id The customer ID to use for retrieving all customer data.
     * @returns All the data associated with the given customer ID.
     */
    abstract getAllCustomerData(customer_id: string): Promise<AllCustomerData>;

    // USER

    /**
     * Gets all the users associated with the given customer ID.
     * @param customer_id The customer ID to use for retrieving the users.
     * @returns An array of users associated with the given customer ID.
     */
    abstract getUsers(customer_id: string): Promise<User[]>;

    /**
     * Gets the user associated with the given user ID.
     * @param user_id The user ID to use for retrieving the user.
     * @returns The user associated with the given user ID, or null if not found.
     */
    abstract getUser(user_id: string): Promise<User|null>;
    
    /**
     * Gets the user associated with the given remote ID.
     * @param remoteId The remote ID to use for retrieving the user.
     * @returns The user associated with the given remote ID, or null if not found.
     */
    abstract getUserFromRemoteId(remoteId: string): Promise<User|null>;
    
    /**
     * Gets the user associated with the given remote ID and password.
     * @param remoteId The remote ID to use for retrieving the user.
     * @param password The password to use for retrieving the user.
     * @returns The user associated with the given remote ID and password, or null if not found.
     */
    abstract getUserFromRemoteIdAndPassword(remoteId: string, password: string): Promise<User|null>;

    /**
     * Gets the user associated with the given customer ID and remote ID.
     * @param customer_id The customer ID to use for retrieving the user.
     * @param remote_id The remote ID to use for retrieving the user.
     * @returns The user associated with the given customer ID and remote ID, or null if not found.
     */
    abstract getUserFromCustomerIdAndRemoteId(customer_id: string, remote_id: string): Promise<User|null>;

    /**
     * Gets the user belonging to the given customer.
     * @param user_id The user ID to use for retrieving the user.
     * @param customer_id The customer ID to use for retrieving the user.
     * @returns The user belonging to the given customer, or null if not found.
     */
    abstract getUserBellongingToCustomer(user_id: string, customer_id: string): Promise<User|null>;

    /**
     * Creates a new user in the database.
     * @param user The user object to be created.
     * @returns The created user object.
     */
    abstract createUser(user: User): Promise<User>;

    /**
     * Updates an existing user in the database.
     * @param user The user object to be updated.
     */
    abstract updateUser(user: User): Promise<void>;

    /**
     * Deletes the user with the given user ID from the database.
     * @param user_id The ID of the user to be deleted.
     */
    abstract deleteUser(user_id: string): Promise<void>;

    // CREDENTIAL

    /**
     * Gets the IDs of the credentials that need to be collected.
     * @returns An array of credential IDs that need to be collected.
     */
    abstract getCredentialsIdToCollect(): Promise<string[]>;

    /**
     * Gets the credentials associated with the given user ID.
     * @param user_id The ID of the user whose credentials are to be retrieved.
     * @returns An array of credentials associated with the given user ID.
     */
    abstract getCredentials(user_id: string|null): Promise<Credential[]>;

    /**
     * Gets the credential associated with the given credential ID.
     * @param credential_id The ID of the credential to be retrieved.
     * @returns The credential associated with the given credential ID, or null if not found.
     */
    abstract getCredential(credential_id: string): Promise<Credential|null>;

    /**
     * Creates a new credential in the database.
     * @param credential The credential object to be created.
     * @returns The created credential object.
     */
    abstract createCredential(credential: Credential): Promise<Credential>;

    /**
     * Updates an existing credential in the database.
     * @param credential The credential object to be updated.
     */
    abstract updateCredential(credential: Credential): Promise<void>;

    /**
     * Deletes the credential with the given credential ID for the specified user.
     * @param user_id The ID of the user whose credential is to be deleted.
     * @param credential_id The ID of the credential to be deleted.
     */
    abstract deleteCredential(user_id: string, credential_id: string): Promise<void>;

    /**
     * Deletes all credentials for the specified user.
     * @param user_id The ID of the user whose credentials are to be deleted.
     */
    abstract deleteCredentials(user_id: string): Promise<void>;
    
    // COLLECTOR MEMORY

    /**
     * Gets all collector memories.
     * @returns An array of all collector memories.
     */
    abstract getCollectorMemories(): Promise<CollectorMemory[]>;

    /**
     * Gets the collector memory with the specified name.
     * @param name The name of the collector memory to be retrieved.
     * @returns The collector memory with the specified name, or null if not found.
     */
    abstract getCollectorMemory(name: string): Promise<CollectorMemory | null>;

    /**
     * Creates a new collector memory in the database.
     * @param collectorMemory The collector memory object to be created.
     * @returns The created collector memory object.
     */
    abstract createCollectorMemory(collectorMemory: CollectorMemory): Promise<CollectorMemory>;

    /**
     * Updates an existing collector memory in the database.
     * @param collectorMemory The collector memory object to be updated.
     */
    abstract updateCollectorMemory(collectorMemory: CollectorMemory): Promise<void>;

    // CALLBACK

    /**
     * Gets all callbacks for the specified customer ID or user ID.
     * @param customer_user_id The ID of the customer user whose callbacks are to be retrieved.
     * @returns An array of callbacks for the specified customer ID or user ID.
     */
    abstract getCallbacks(customer_user_id: string): Promise<Callback[]>;

    /**
     * Gets the callback with the specified callback ID.
     * @param callback_id The ID of the callback to be retrieved.
     * @returns The callback with the specified ID, or null if not found.
     */
    abstract getCallback(callback_id: string): Promise<Callback | null>;

    /**
     * Creates a new callback in the database.
     * @param callback The callback object to be created.
     * @returns The created callback object.
     */
    abstract createCallback(callback: Callback): Promise<Callback>;

    /**
     * Updates an existing callback in the database.
     * @param callback The callback object to be updated.
     */
    abstract updateCallback(callback: Callback): Promise<void>;

    /**
     * Deletes the callback with the specified callback ID from the database.
     * @param callback_id The ID of the callback to be deleted.
     */
    abstract deleteCallback(callback_id: string): Promise<void>;
}
