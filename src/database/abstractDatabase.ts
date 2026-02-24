import { Customer, Stats } from "../model/customer";
import { User } from "../model/user";
import { IcCredential } from "../model/credential";
import { CollectorMemory } from "../model/collectorMemory";

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

    abstract getCustomer(customer_id: string): Promise<Customer|null>;

    abstract updateCustomer(customer: Customer): Promise<void>;

    abstract getCustomerStats(customer_id: string): Promise<Stats|null>;

    // USER

    abstract getUsers(customer_id: string): Promise<User[]>;

    abstract getUser(user_id: string): Promise<User|null>;
    
    abstract getUserFromRemoteIdAndPassword(remoteId: string, password: string): Promise<User|null>;

    abstract getUserFromCustomerIdAndRemoteId(customer_id: string, remote_id: string): Promise<User|null>;

    abstract getUserBellongingToCustomer(user_id: string, customer_id: string): Promise<User|null>;

    abstract createUser(user: User): Promise<User>;

    abstract updateUser(user: User): Promise<void>;

    abstract deleteUser(user_id: string): Promise<void>;

    // CREDENTIAL

    abstract getCredentialsIdToCollect(): Promise<string[]>;

    abstract getCredentials(user_id: string|null): Promise<IcCredential[]>;

    abstract getCredential(credential_id: string): Promise<IcCredential|null>;

    abstract createCredential(credential: IcCredential): Promise<IcCredential>;

    abstract updateCredential(credential: IcCredential): Promise<void>;

    abstract deleteCredential(user_id: string, credential_id: string): Promise<void>;

    abstract deleteCredentials(user_id: string): Promise<void>;
    
    // COLLECTOR MEMORY
    
    abstract getCollectorMemory(name: string): Promise<CollectorMemory | null>;

    abstract createCollectorMemory(collectorMemory: CollectorMemory): Promise<CollectorMemory>;

    abstract updateCollectorMemory(collectorMemory: CollectorMemory): Promise<void>;
}
