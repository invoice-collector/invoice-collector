import { Customer, CustomerStats } from "../model/customer";
import { User } from "../model/user";
import { Credential } from "../model/credential";
import { CollectorMemory } from "../model/collectorMemory";
import { Callback } from "../model/callback";

export abstract class AbstractDatabase {
    constructor() {
        if (new.target === AbstractDatabase) {
            throw new TypeError("Cannot construct AbstractDatabase instances directly");
        }
    }

    abstract connect(): Promise<void>;

    abstract disconnect(): Promise<void>;

    // CUSTOMER

    abstract countCustomers(): Promise<number>;

    abstract createCustomer(customer: Customer): Promise<Customer>;

    abstract getCustomerFromBearer(bearer: string): Promise<Customer|null>;
    
    abstract getCustomerFromEmail(email: string): Promise<Customer|null>;

    abstract getCustomerFromEmailAndPassword(email: string, password: string): Promise<Customer|null>;

    abstract getCustomerFromInviteId(inviteId: string): Promise<Customer|null>;

    abstract getCustomer(customer_id: string): Promise<Customer|null>;

    abstract updateCustomer(customer: Customer): Promise<void>;

    abstract getCustomerStats(customer_id: string): Promise<CustomerStats|null>;

    // USER

    abstract getUsers(customer_id: string): Promise<User[]>;

    abstract getUser(user_id: string): Promise<User|null>;
    
    abstract getUserFromRemoteId(remoteId: string): Promise<User|null>;
    
    abstract getUserFromRemoteIdAndPassword(remoteId: string, password: string): Promise<User|null>;

    abstract getUserFromCustomerIdAndRemoteId(customer_id: string, remote_id: string): Promise<User|null>;

    abstract getUserBellongingToCustomer(user_id: string, customer_id: string): Promise<User|null>;

    abstract createUser(user: User): Promise<User>;

    abstract updateUser(user: User): Promise<void>;

    abstract deleteUser(user_id: string): Promise<void>;

    // CREDENTIAL

    abstract getCredentialsIdToCollect(): Promise<string[]>;

    abstract getCredentials(user_id: string|null): Promise<Credential[]>;

    abstract getCredential(credential_id: string): Promise<Credential|null>;

    abstract createCredential(credential: Credential): Promise<Credential>;

    abstract updateCredential(credential: Credential): Promise<void>;

    abstract deleteCredential(user_id: string, credential_id: string): Promise<void>;

    abstract deleteCredentials(user_id: string): Promise<void>;
    
    // COLLECTOR MEMORY
    
    abstract getCollectorMemory(name: string): Promise<CollectorMemory | null>;

    abstract createCollectorMemory(collectorMemory: CollectorMemory): Promise<CollectorMemory>;

    abstract updateCollectorMemory(collectorMemory: CollectorMemory): Promise<void>;
    
    // CALLBACK

    abstract getCallbacks(customer_user_id: string): Promise<Callback[]>;

    abstract getCallback(callback_id: string): Promise<Callback | null>;

    abstract createCallback(callback: Callback): Promise<Callback>;

    abstract updateCallback(callback: Callback): Promise<void>;

    abstract deleteCallback(callback_id: string): Promise<void>;
}
