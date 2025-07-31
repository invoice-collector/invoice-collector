export class Plan {

    static TRIAL = new Plan('trial', "Trial", 1, 1, undefined, undefined, 0, 0, 0, 0, []);
    static FREE = new Plan('free', "Free", undefined, undefined, undefined, undefined, 0, 0, 0, 0, []);

    id: string;
    name: string | undefined;
    maxUsers: number | undefined;
    maxCredentials: number | undefined;
    maxInvoicesPerMonth: number | undefined;
    maxCollectors: number | undefined;
    pricePerUser: number;
    pricePerCredential: number;
    pricePerInvoice: number;
    pricePerCollector: number;
    features: string[];

    constructor(
        id: string,
        name: string,
        maxUsers: number | undefined,
        maxCredentials: number | undefined,
        maxInvoicesPerMonth: number | undefined,
        maxCollectors: number | undefined,
        pricePerUser: number,
        pricePerCredential: number,
        pricePerInvoice: number,
        pricePerCollector: number,
        features: string[]
    ) {
        this.id = id;
        this.name = name;
        this.maxUsers = maxUsers;
        this.maxCredentials = maxCredentials;
        this.maxInvoicesPerMonth = maxInvoicesPerMonth;
        this.maxCollectors = maxCollectors;
        this.pricePerUser = pricePerUser;
        this.pricePerCredential = pricePerCredential;
        this.pricePerInvoice = pricePerInvoice;
        this.pricePerCollector = pricePerCollector;
        this.features = features;
    }
}