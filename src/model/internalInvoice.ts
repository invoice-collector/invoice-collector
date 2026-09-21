import { Plan } from "./plan";

export class InternalInvoice {

    id: string;
    month: string;
    creationDate: Date;
    dueDate: Date;
    plan: Plan;
    users: number;
    activeUsers: number;
    credentials: number;
    activeCredentials: number;
    invoices: number;
    collectors: number;
    activeCollectors: number;

    /**
     * Constructs a new Invoice-Collector Invoice (internal invoice).
     * @param id The unique identifier of the internal invoice.
     * @param month The month of the invoice.
     * @param creationDate The creation date of the invoice.
     * @param dueDate The due date of the invoice.
     * @param plan The plan associated with the invoice.
     * @param users The total number of users.
     * @param activeUsers The number of active users. A user is concidered active if at least one invoice has been issued for them.
     * @param credentials The total number of credentials.
     * @param activeCredentials The number of active credentials. A credential is considered active if at least one invoice has been issued for it.
     * @param invoices The total number of invoices.
     * @param collectors The total number of collectors.
     * @param activeCollectors The number of active collectors. A collector is considered active if at least one invoice has been issued for them.
     */
    constructor(
        id: string,
        month: string,
        creationDate: Date,
        dueDate: Date,
        plan: Plan,
        users: number,
        activeUsers: number,
        credentials: number,
        activeCredentials: number,
        invoices: number,
        collectors: number,
        activeCollectors: number,
    ) {
        this.id = id;
        this.month = month;
        this.creationDate = creationDate;
        this.dueDate = dueDate;
        this.plan = plan;
        this.users = users;
        this.activeUsers = activeUsers;
        this.credentials = credentials;
        this.activeCredentials = activeCredentials;
        this.invoices = invoices;
        this.collectors = collectors;
        this.activeCollectors = activeCollectors;
    }
}