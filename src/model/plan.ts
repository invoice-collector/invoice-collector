export class Plan {

    static TRIAL = new Plan('trial', 0, 0, 0, 0, 0, 0, 0, 0);
    static FREE = new Plan('free', undefined, undefined, undefined, undefined, 0, 0, 0, 0);

    id: string;
    maxUsers: number | undefined;
    maxCredentials: number | undefined;
    maxInvoices: number | undefined;
    maxCollectors: number | undefined;
    pricePerUser: number;
    pricePerCredential: number;
    pricePerInvoice: number;
    pricePerCollector: number;

    constructor(
        id: string,
        maxUsers: number | undefined,
        maxCredentials: number | undefined,
        maxInvoices: number | undefined,
        maxCollectors: number | undefined,
        pricePerUser: number,
        pricePerCredential: number,
        pricePerInvoice: number,
        pricePerCollector: number
    ) {
        this.id = id;
        this.maxUsers = maxUsers;
        this.maxCredentials = maxCredentials;
        this.maxInvoices = maxInvoices;
        this.maxCollectors = maxCollectors;
        this.pricePerUser = pricePerUser;
        this.pricePerCredential = pricePerCredential;
        this.pricePerInvoice = pricePerInvoice;
        this.pricePerCollector = pricePerCollector;
    }
}