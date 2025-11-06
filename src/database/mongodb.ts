import { MongoClient, Db, ObjectId } from "mongodb";
import { AbstractDatabase } from "./abstractDatabase";
import { Customer, Stats } from "../model/customer";
import { User } from "../model/user";
import { IcCredential } from "../model/credential";
import * as utils from "../utils";
import { buildCustomerStatsPipeline } from "./mongodbConstants";
import { State } from "../model/state";
import { CollectorMemory } from "../model/collectorMemory";
import { Actions } from "../model/actions";

export class MongoDB extends AbstractDatabase {

    static CUSTOMER_COLLECTION = 'customers';
    static USER_COLLECTION = 'users';
    static CREDENTIAL_COLLECTION = 'credentials';
    static COLLECTOR_MEMORY_COLLECTION = 'collector_memories';

    client: MongoClient;
    db_name: string;
    db: Db|null;

    constructor(uri) {
        super();
        this.client = new MongoClient(uri);
        this.db_name = utils.getEnvVar("DATABASE_MONGODB_NAME");
        this.db = null;
    }

    async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log("Connected successfully to MongoDB");
            this.db = this.client.db(this.db_name);

            // Create collection if not existing
            await this.db.createCollection(MongoDB.CUSTOMER_COLLECTION);
            await this.db.createCollection(MongoDB.USER_COLLECTION);
            await this.db.createCollection(MongoDB.CREDENTIAL_COLLECTION);
            await this.db.createCollection(MongoDB.COLLECTOR_MEMORY_COLLECTION);

            // Create default customer if no customer found
            const nbCustomers = await this.countCustomers();
            if (nbCustomers === 0) {
                console.log("No customer found in database, creating default customer.");
                const bearer = (await Customer.createDefault()).bearer;
                console.log(`Default customer created. Bearer is "${bearer}". Keep it safe, it will not be displayed again.`);
            }

        } catch (err) {
            console.error("Connection to MongoDB failed", err);
        }
    }

    async disconnect(): Promise<void> {
        try {
            await this.client.close();
            console.log("Disconnected successfully from MongoDB");
        } catch (err) {
            console.error("Disconnection from MongoDB failed", err);
        }
    }

    // CUSTOMER

    async countCustomers(): Promise<number> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        return await this.db.collection(MongoDB.CUSTOMER_COLLECTION).countDocuments();
    }

    async createCustomer(customer: Customer): Promise<Customer> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.CUSTOMER_COLLECTION).insertOne({
            name: customer.name,
            email: customer.email,
            password: customer.password,
            callback: customer.callback,
            remoteId: customer.remoteId,
            bearer: customer.bearer,
            createdAt: customer.createdAt,
            theme: customer.theme,
            subscribedCollectors: customer.subscribedCollectors,
            isSubscribedToAll: customer.isSubscribedToAll,
            displaySketchCollectors: customer.displaySketchCollectors,
            maxDelayBetweenCollect: customer.maxDelayBetweenCollect,
            plan: customer.plan
        });
        customer.id = document.insertedId.toString();
        return customer;
    }

    private async getCustomerFromMatcher(matcher: object): Promise<Customer|null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.CUSTOMER_COLLECTION).findOne(matcher);
        if (!document) {
            return null;
        }
        let customer = new Customer(
            document.email,
            document.password,
            document.name,
            document.callback,
            document.remoteId,
            document.bearer,
            document.createdAt,
            document.theme,
            document.subscribedCollectors,
            document.isSubscribedToAll,
            document.displaySketchCollectors,
            document.maxDelayBetweenCollect,
            document.plan
        );
        customer.id = document._id.toString();
        return customer;
    }

    async getCustomerFromBearer(bearer: string): Promise<Customer|null> {
        return await this.getCustomerFromMatcher({ bearer });
    }

    async getCustomerFromEmail(email: string): Promise<Customer|null> {
        return await this.getCustomerFromMatcher({ email });
    }

    async getCustomerFromEmailAndPassword(email: string, password: string): Promise<Customer|null> {
        return await this.getCustomerFromMatcher({ email, password });
    }

    async getCustomer(customer_id: string): Promise<Customer|null> {
        return await this.getCustomerFromMatcher({ _id: new ObjectId(customer_id) });
    }

    async updateCustomer(customer: Customer): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.CUSTOMER_COLLECTION).updateOne(
            { _id: new ObjectId(customer.id) },
            { $set: {
                email: customer.email,
                password: customer.password,
                name: customer.name,
                callback: customer.callback,
                remoteId: customer.remoteId,
                bearer: customer.bearer,
                theme: customer.theme,
                subscribedCollectors: customer.subscribedCollectors,
                isSubscribedToAll: customer.isSubscribedToAll,
                displaySketchCollectors: customer.displaySketchCollectors,
                maxDelayBetweenCollect: customer.maxDelayBetweenCollect,
                plan: customer.plan
            }}
        );
    }

    async getCustomerStats(customer_id: string): Promise<Stats | null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const pipeline = buildCustomerStatsPipeline({ _id: new ObjectId(customer_id) });
        const documents = await this.db.collection(MongoDB.CUSTOMER_COLLECTION).aggregate(pipeline).toArray();
        if (documents.length === 0) {
            return null;
        }
        return documents[0].stats as Stats;
    }

    // USER

    async getUsers(customer_id: string ): Promise<User[]> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const documents = await this.db.collection(MongoDB.USER_COLLECTION).find({
            customer_id: new ObjectId(customer_id)
        }).toArray();
        return documents.map(document => {
            let user = new User(
                document.customer_id.toString(),
                document.remote_id,
                document.location,
                document.locale,
                document.termsConditions,
                document.createdAt
            );
            user.id = document._id.toString();
            return user;
        });
    }

    async getUser(user_id: string): Promise<User|null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.USER_COLLECTION).findOne({
            _id: new ObjectId(user_id)
        });
        if (!document) {
            return null;
        }
        let user = new User(
            document.customer_id.toString(),
            document.remote_id,
            document.location,
            document.locale,
            document.termsConditions,
            document.createdAt
        );
        user.id = document._id.toString();
        return user;
    }

    async getUserFromCustomerIdAndRemoteId(customer_id: string, remote_id: string): Promise<User|null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.USER_COLLECTION).findOne({
            customer_id: new ObjectId(customer_id),
            remote_id
        });
        if (!document) {
            return null;
        }
        let user = new User(
            document.customer_id.toString(),
            document.remote_id,
            document.location,
            document.locale,
            document.termsConditions,
            document.createdAt
        );
        user.id = document._id.toString();
        return user;
    }

    async getUserBellongingToCustomer(user_id: string, customer_id: string): Promise<User|null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.USER_COLLECTION).findOne({
            _id: new ObjectId(user_id),
            customer_id: new ObjectId(customer_id)
        });
        if (!document) {
            return null;
        }
        let user = new User(
            document.customer_id.toString(),
            document.remote_id,
            document.location,
            document.locale,
            document.termsConditions,
            document.createdAt
        );
        user.id = document._id.toString();
        return user;
    }

    async createUser(user: User): Promise<User> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.USER_COLLECTION).insertOne({
            customer_id: new ObjectId(user.customer_id),
            remote_id: user.remote_id,
            location: user.location,
            locale: user.locale,
            termsConditions: user.termsConditions,
            createdAt: user.createdAt
        });
        user.id = document.insertedId.toString();
        return user;
    }

    async updateUser(user: User): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.USER_COLLECTION).updateOne(
            { _id: new ObjectId(user.id) },
            { $set: {
                customer_id: new ObjectId(user.customer_id),
                remote_id: user.remote_id,
                location: user.location,
                locale: user.locale,
                termsConditions: user.termsConditions
            }}
        );
    }

    async deleteUser(user_id: string): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.USER_COLLECTION).deleteOne({
            _id: new ObjectId(user_id)
        });
    }

    // CREDENTIAL

    async getCredentialsIdToCollect(): Promise<string[]> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const query = {
            $or: [
            { last_collect_timestamp: NaN },
            {
                $and: [
                    { $expr: { $lt: [ "$last_collect_timestamp", "$next_collect_timestamp" ] } },
                    { $expr: { $lt: [ "$next_collect_timestamp", Date.now() ] } },
                    { "state.index": { $gte: 0 } }
                ]
            }
            ]
        };
        const documents = await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).aggregate([
            { $match: query },
            { $project: { _id: 1 } }
        ]).toArray();
        return documents.map(document => document._id.toString());
    }

    async getCredentials(user_id: string): Promise<IcCredential[]> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const documents = await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).find({
            user_id: new ObjectId(user_id)
        }).toArray();
        return documents.map(document => {
            let credential = new IcCredential(
                document.user_id.toString(),
                document.collector_id,
                document.note,
                document.secret_manager_id,
                document.create_timestamp,
                document.download_from_timestamp,
                document.last_collect_timestamp,
                document.next_collect_timestamp,
                document.invoices,
                State.fromObject(document.state)
            );
            credential.id = document._id.toString();
            return credential;
        });
    }

    async getCredential(credential_id: string): Promise<IcCredential|null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).findOne({
            _id: new ObjectId(credential_id)
        });
        if (!document) {
            return null;
        }
        let credential = new IcCredential(
            document.user_id.toString(),
            document.collector_id,
            document.note,
            document.secret_manager_id,
            document.create_timestamp,
            document.download_from_timestamp,
            document.last_collect_timestamp,
            document.next_collect_timestamp,
            document.invoices,
            State.fromObject(document.state)
        );
        credential.id = document._id.toString();
        return credential;
    }

    async createCredential(credential: IcCredential): Promise<IcCredential> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).insertOne({
            user_id: new ObjectId(credential.user_id),
            collector_id: credential.collector_id,
            note: credential.note,
            secret_manager_id: credential.secret_manager_id,
            create_timestamp: credential.create_timestamp,
            download_from_timestamp: credential.download_from_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            invoices: credential.invoices,
            state: credential.state
        });
        credential.id = document.insertedId.toString();
        return credential;
    }

    async updateCredential(credential: IcCredential): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).updateOne(
            { _id: new ObjectId(credential.id) },
            { $set: {
                user_id: new ObjectId(credential.user_id),
                collector_id: credential.collector_id,
                note: credential.note,
                secret_manager_id: credential.secret_manager_id,
                last_collect_timestamp: credential.last_collect_timestamp,
                next_collect_timestamp: credential.next_collect_timestamp,
                invoices: credential.invoices,
                state: credential.state
            }}
        );
    }

    async deleteCredential(user_id: string, credential_id: string): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).deleteOne({
            _id: new ObjectId(credential_id),
            user_id: new ObjectId(user_id)
        });
    }

    async deleteCredentials(user_id: string): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.CREDENTIAL_COLLECTION).deleteMany({
            user_id: new ObjectId(user_id)
        });
    }

    // COLLECTOR MEMORY

    async getCollectorMemory(name: string): Promise<CollectorMemory | null> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.COLLECTOR_MEMORY_COLLECTION).findOne({ name });
        if (!document) {
            return null;
        }
        const collectorMemory = new CollectorMemory(
            document.name,
            Actions.fromObject(document.actions)
        );
        collectorMemory.id = document._id.toString();
        return collectorMemory;
    }

    async createCollectorMemory(collectorMemory: CollectorMemory): Promise<CollectorMemory> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        const document = await this.db.collection(MongoDB.COLLECTOR_MEMORY_COLLECTION).insertOne({
            name: collectorMemory.name,
            actions: collectorMemory.actions
        });
        collectorMemory.id = document.insertedId.toString();
        return collectorMemory;
    }

    async updateCollectorMemory(collectorMemory: CollectorMemory): Promise<void> {
        if (!this.db) {
            throw new Error("Database is not connected");
        }
        await this.db.collection(MongoDB.COLLECTOR_MEMORY_COLLECTION).updateOne(
            { _id: new ObjectId(collectorMemory.id) },
            { $set: {
                name: collectorMemory.name,
                actions: collectorMemory.actions
            }}
        );
    }
}
