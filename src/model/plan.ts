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
     * Throws an error if the input object is null or undefined.
     * @param obj A plain object representing a plan.
     * @returns A Plan instance.
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