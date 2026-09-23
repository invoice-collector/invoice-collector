import { StatusError, AuthenticationBearerError } from '../error';
import { DatabaseFactory } from '../database/databaseFactory';
import * as utils from '../utils';
import { User } from './user';
import { CollectorLoader } from '../collectors/collectorLoader';
import { Plan } from './plan';
import { Callback } from './callback';
import { AllCustomerData } from '../database/abstractDatabase';
import { Bill } from './bill';
import { CollectorState } from '../collectors/abstractCollector';

export enum Theme {
    DEFAULT = 'default',
    OCEAN = 'ocean',
    DARK = 'dark'
}

// Authentication method preferences a customer can choose
export enum CustomerAuthenticationMethod {
    SECRETS_ONLY = 'secretsOnly',
    SECRETS_PREFERRED = 'secretsPreferred',
    LET_USER_DECIDE = 'letUserDecide',
    INTERACTIVE_PREFERRED = 'interactivePreferred',
    INTERACTIVE_ONLY = 'interactiveOnly'
}

export interface CustomerStats {
    users: number;
    credentials: number;
    credentialsAuthenticationError: number;
    credentialsDisconnectedError: number;
    invoices: number;
    byMonth: {
        [key: string]: {
            users: number;
            credentials: number;
            credentialsAuthenticationError: number;
            credentialsDisconnectedError: number;
            invoices: number;
        }
    };
    collectors: {
        [key: string]: number;
    };
}
export class Customer {

    static DEFAULT_EMAIL = '';
    static DEFAULT_PASSWORD = '';
    static DEFAULT_NAME = 'default';
    static DEFAULT_CID = '';
    static DEFAULT_REMOTE_ID = '';
    static DEFAULT_BEARER = '';
    static DEFAULT_SUBSCRIBED_COLLECTORS: string[] = [];
    static DEFAULT_IS_SUBSCRIBED_TO_ALL = true;
    static DEFAULT_AUTHENTICATION_METHOD = CustomerAuthenticationMethod.INTERACTIVE_PREFERRED;
    static DEFAULT_DISPLAY_SKETCH_COLLECTORS = true;
    static DEFAULT_MAX_DELAY_BETWEEN_COLLECT = 2592000000; // 30 days in milliseconds

    static async getAll(): Promise<Customer[]> {
        return await DatabaseFactory.getDatabase().getAllCustomers();
    }

    static async fromBearer(raw_bearer: string): Promise<Customer> {
        // Get hashed bearer
        const hashed_bearer = utils.hash_string(raw_bearer);

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
            Customer.DEFAULT_REMOTE_ID,
            utils.hash_string(bearer),
            utils.convertNameToInviteId(Customer.DEFAULT_NAME),
            Date.now(),
        );
        return {
            bearer,
            customer: await DatabaseFactory.getDatabase().createCustomer(customer),
        };
    }

    id: string;
    email: string;
    password: string;
    name: string;
    cid: string;
    remoteId: string;
    bearer: string;
    inviteId: string;
    createdAt: number;
    theme: Theme;
    subscribedCollectors: string[];
    isSubscribedToAll: boolean;
    authenticationMethod: CustomerAuthenticationMethod;
    displaySketchCollectors: boolean;
    maxDelayBetweenCollect: number;
    plan: Plan;
    bills: Bill[];

    constructor(
        email: string,
        password: string,
        name: string,
        cid: string,
        remoteId: string,
        bearer: string,
        inviteId: string,
        createdAt: number,
        theme: Theme = Theme.DEFAULT,
        subscribedCollectors: string[] = Customer.DEFAULT_SUBSCRIBED_COLLECTORS,
        isSubscribedToAll: boolean = Customer.DEFAULT_IS_SUBSCRIBED_TO_ALL,
        authenticationMethod: CustomerAuthenticationMethod = Customer.DEFAULT_AUTHENTICATION_METHOD,
        displaySketchCollectors: boolean = Customer.DEFAULT_DISPLAY_SKETCH_COLLECTORS,
        maxDelayBetweenCollect: number = Customer.DEFAULT_MAX_DELAY_BETWEEN_COLLECT,
        plan: Plan = utils.IS_SELF_HOSTED ? Plan.FREE : Plan.TRIAL,
        bills: Bill[] = []
    ) {
        this.id = '';
        this.email = email;
        this.password = password;
        this.name = name;
        this.remoteId = remoteId;
        this.cid = cid;
        this.bearer = bearer;
        this.inviteId = inviteId;
        this.createdAt = createdAt;
        this.theme = theme;
        this.subscribedCollectors = subscribedCollectors;
        this.isSubscribedToAll = isSubscribedToAll;
        this.authenticationMethod = authenticationMethod;
        this.displaySketchCollectors = displaySketchCollectors;
        this.maxDelayBetweenCollect = maxDelayBetweenCollect;
        this.plan = plan;
        this.bills = bills;
    }

    async getUserFromRemoteId(remote_id: string): Promise<User|null> {
        return await DatabaseFactory.getDatabase().getUserFromCustomerIdAndRemoteId(this.id, remote_id);
    }

    async getUsers(): Promise<User[]> {
        return await DatabaseFactory.getDatabase().getUsers(this.id);
    }

    async getUser(user_id: string): Promise<User|null> {
        return await DatabaseFactory.getDatabase().getUserBellongingToCustomer(user_id, this.id);
    }

    async getCallbacks(): Promise<Callback[]> {
        return DatabaseFactory.getDatabase().getCallbacks(this.id);
    }

    async getStats(): Promise<CustomerStats> {
        return DatabaseFactory.getDatabase().getCustomerStats(this.id);
    }

    setTheme(theme: string): void {
        //Check if theme is supported
        if(!Object.values(Theme).includes(theme as Theme)) {
            throw new StatusError(`Theme "${theme}" not supported. Available themes are: ${Object.values(Theme).join(', ')}.`, 400);
        }

        this.theme = theme as Theme;
    }

    setAuthenticationMethod(authenticationMethod: string): void {
        // Check if authentication method is supported
        if(!Object.values(CustomerAuthenticationMethod).includes(authenticationMethod as CustomerAuthenticationMethod)) {
            throw new StatusError(`Authentication method "${authenticationMethod}" not supported. Available methods are: ${Object.values(CustomerAuthenticationMethod).join(', ')}.`, 400);
        }

        this.authenticationMethod = authenticationMethod as CustomerAuthenticationMethod;
    }

    async setSubscribedCollectors(collectors: string[]): Promise<void> {
        // Check if collectors is an array
        if (!Array.isArray(collectors)) {
            throw new StatusError('Collectors must be an array.', 400);
        }

        // Order collectors alphabetically
        collectors.sort();

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

    async commit(): Promise<void> {
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
        return this.plan.maxUsers === -1 || stats.users < this.plan.maxUsers;
    }

    async canAddCredential(): Promise<boolean> {
        // Get stats
        const stats = await this.getStats();
        // Check if credential limit is reached
        return this.plan.maxCredentials === -1 || stats.credentials < this.plan.maxCredentials;
    }

    // INTERNAL INVOICES

    async computeMissingBills(): Promise<Bill[]> {
        // Compute months between now and createdAt
        const months = utils.getMonthsBetween(this.createdAt, new Date(), true, false);

        // Filter months to find the ones that do not have a bill yet
        const missingMonths = months.filter((month) => !this.bills.some((bill) => bill.month === month));

        // If there are no missing months, return early
        if (missingMonths.length === 0) {
            return [];
        }

        // Get all the customer data
        const allCustomerData = await DatabaseFactory.getDatabase().getAllCustomerData(this.id);

        // Create bills for the missing months
        const newBills: Bill[] = [];
        for (const month of missingMonths) {
            const bill = await this.createBill(allCustomerData, month);
            newBills.push(bill);
        }
        return newBills;
    }

    private async createBill(allCustomerData: AllCustomerData, month: string): Promise<Bill> {
        const [year, monthStr] = month.split('-').map(Number);
        const monthStart = new Date(Date.UTC(year, monthStr - 1));  // First millisecond of the month
        const monthEnd = new Date(Date.UTC(year, monthStr));        // Last millisecond of the month

        // Generate bill id
        const id = await utils.generateBillId();

        // Compute creation date and due date
        const creationDate = new Date();
        const dueDate = new Date(creationDate);
        dueDate.setMonth(dueDate.getMonth() + 1);

        // Compute active users, credentials and collectors
        const activeUsers = new Set<string>();
        const activeCredentials = new Set<string>();
        const usedCollectors = new Set<string>();
        const activeCollectors = new Set<string>();
        let credentials = 0;
        let invoices = 0;

        // For each user in the customer data
        for (const user of allCustomerData.users) {
            // For each credential of the user
            for (const credential of user.credentials) {
                // Get invoices this month
                const monthInvoices = credential.invoices.filter((invoice) => {
                    if (invoice.collected_timestamp == null) {
                        return false;
                    }
                    const collectedDate = new Date(invoice.collected_timestamp);
                    return monthStart <= collectedDate && collectedDate < monthEnd;
                });
                // Compute if the credential is active
                const isActive = credential.invoices.length > 0;
                // Increase the total credentials count
                credentials++;
                // Increase the total invoices count
                invoices += monthInvoices.length;
                // If the credential is active, add its collectors to the active collectors set
                if (isActive) {
                    // Add the user to the active users set
                    activeUsers.add(user.id);
                    // Add the credential to the active credentials set
                    activeCredentials.add(credential.id);
                    // Add the collector to the active collectors set
                    activeCollectors.add(credential.collector_id);
                }
                // Get collector from collector id
                const collector = await CollectorLoader.getConfig(credential.collector_id);
                // If collector is not planned
                if (collector.state !== CollectorState.PLANNED) {
                    // Add the collector to the used collectors set
                    usedCollectors.add(credential.collector_id);
                }
            }
        }

        // Create the internal invoice for the given month
        const bill = new Bill(
            id,
            month,
            creationDate,
            dueDate,
            this.plan,
            allCustomerData.users.length,
            activeUsers.size,
            credentials,
            activeCredentials.size,
            invoices,
            this.subscribedCollectors.length,
            usedCollectors.size,
            activeCollectors.size
        );

        // Add the bill to the customer's bills
        this.bills.push(bill);

        // Commit the changes in database
        await this.commit()

        return bill;
    }
}
