export class Plan {

    static TRIAL = new Plan('trial', "Trial", 1, 1, -1, -1, 0, 0, 0, 0, 0, [
        '1 user',
        '1 collector',
        'Unlimited invoices per month'
    ]);
    static FREE = new Plan('free', "Free", -1, -1, -1, -1, 0, 0, 0, 0, 0, [
        'Unlimited users',
        'Unlimited collectors',
        'Unlimited invoices per month'
    ]);

    id: string;
    name: string;
    maxUsers: number;
    maxCredentials: number;
    maxInvoicesPerMonth: number;
    maxCollectors: number;
    priceBase: number;
    pricePerUser: number;
    pricePerCredential: number;
    pricePerInvoice: number;
    pricePerCollector: number;
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
        this.priceBase = priceBase;
        this.pricePerUser = pricePerUser;
        this.pricePerCredential = pricePerCredential;
        this.pricePerInvoice = pricePerInvoice;
        this.pricePerCollector = pricePerCollector;
        this.features = features;
    }
}