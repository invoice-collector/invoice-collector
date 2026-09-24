export class Plan {

    static TRIAL = new Plan('trial', 'Trial', 1, 1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, [
        '1 user',
        '1 collector',
        'Unlimited invoices per month',
    ]);
    static FREE = new Plan('free', 'Free', -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, [
        'Unlimited users',
        'Unlimited collectors',
        'Unlimited invoices per month',
    ]);

    /**
     * Creates a Plan instance from a plain object.
     * @param obj A plain object representing a plan.
     * @returns A Plan instance.
     * @throws An error if the input object is null or undefined.
     */
    static fromObject(obj: any): Plan {
        // If obj is null or undefined, return null
        if (obj === null || obj === undefined) {
            throw new Error(`Cannot convert object to Plan: input is not a valid object: ${JSON.stringify(obj)}`);
        }
        return new Plan(
            obj.id,
            obj.name,
            obj.maxUsers,
            obj.maxCredentials,
            obj.maxInvoicesPerMonth,
            obj.maxCollectors,
            obj.priceBase,
            obj.pricePerUser,
            obj.pricePerActiveUser,
            obj.pricePerCredential,
            obj.pricePerActiveCredential,
            obj.pricePerInvoice,
            obj.pricePerSubscribedCollector,
            obj.pricePerUsedCollector,
            obj.pricePerActiveCollector,
            obj.features,
        );
    }

    id: string;
    name: string;
    maxUsers: number;
    maxCredentials: number;
    maxInvoicesPerMonth: number;
    maxCollectors: number;
    priceBase: number;
    pricePerUser: number;
    pricePerActiveUser: number;
    pricePerCredential: number;
    pricePerActiveCredential: number;
    pricePerInvoice: number;
    pricePerSubscribedCollector: number;
    pricePerUsedCollector: number;
    pricePerActiveCollector: number;
    features: string[];

    /**
     * Constructs a new Plan instance with the specified properties.
     * @param id The unique identifier for the plan.
     * @param name The name of the plan.
     * @param maxUsers The maximum number of users allowed for the plan.
     * @param maxCredentials The maximum number of credentials allowed for the plan.
     * @param maxInvoicesPerMonth The maximum number of invoices allowed per month for the plan.
     * @param maxCollectors The maximum number of collectors allowed for the plan.
     * @param priceBase The base price of the plan.
     * @param pricePerUser The price per user for the plan.
     * @param pricePerActiveUser The price per active user for the plan.
     * @param pricePerCredential The price per credential for the plan.
     * @param pricePerActiveCredential The price per active credential for the plan.
     * @param pricePerInvoice The price per invoice for the plan.
     * @param pricePerSubscribedCollector The price per subscribed collector for the plan.
     * @param pricePerUsedCollector The price per used collector for the plan.
     * @param pricePerActiveCollector The price per active collector for the plan.
     * @param features An array of features included in the plan visible by the user.
     */
    constructor(
        id: string,
        name: string,
        maxUsers: number,
        maxCredentials: number,
        maxInvoicesPerMonth: number,
        maxCollectors: number,
        priceBase: number,
        pricePerUser: number,
        pricePerActiveUser: number,
        pricePerCredential: number,
        pricePerActiveCredential: number,
        pricePerInvoice: number,
        pricePerSubscribedCollector: number,
        pricePerUsedCollector: number,
        pricePerActiveCollector: number,
        features: string[],
    ) {
        this.id = id;
        this.name = name;
        this.maxUsers = maxUsers;
        this.maxCredentials = maxCredentials;
        this.maxInvoicesPerMonth = maxInvoicesPerMonth;
        this.maxCollectors = maxCollectors;
        this.priceBase = priceBase;
        this.pricePerUser = pricePerUser;
        this.pricePerActiveUser = pricePerActiveUser;
        this.pricePerCredential = pricePerCredential;
        this.pricePerActiveCredential = pricePerActiveCredential;
        this.pricePerInvoice = pricePerInvoice;
        this.pricePerSubscribedCollector = pricePerSubscribedCollector;
        this.pricePerUsedCollector = pricePerUsedCollector;
        this.pricePerActiveCollector = pricePerActiveCollector;
        this.features = features;
    }

    /**
     * Checks whether the plan has no associated costs.
     * @returns A boolean indicating if the plan has no costs.
     */
    noCost(): boolean {
        return this.priceBase === 0 &&
               this.pricePerUser === 0 &&
               this.pricePerActiveUser === 0 &&
               this.pricePerCredential === 0 &&
               this.pricePerActiveCredential === 0 &&
               this.pricePerInvoice === 0 &&
               this.pricePerSubscribedCollector === 0 &&
               this.pricePerUsedCollector === 0 &&
               this.pricePerActiveCollector === 0;
    }
}