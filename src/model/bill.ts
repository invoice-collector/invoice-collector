import { Plan } from "./plan";

export class Bill {

    /**
     * Creates an array of Bill instances from an array of plain objects.
     * @param objs An array of plain objects representing bills.
     * @returns An array of Bill instances.
     * @throws An error if the input object is null, undefined, or not an array.
     */
    static fromObjects(objs: any[]): Bill[] {
        // If objs is null or undefined or not an array, return empty array
        if (objs === null || objs === undefined || !Array.isArray(objs)) {
            throw new Error(`Cannot convert object to Bill array: input is not a valid array: ${JSON.stringify(objs)}`);
        }
        return objs.map(obj => Bill.fromObject(obj));
    }

    /**
     * Creates a Bill instance from a plain object.
     * @throws An error if the input object is null or undefined.
     * @param obj A plain object representing a bill.
     * @returns A Bill instance.
     */
    static fromObject(obj: any): Bill {
        // If obj is null or undefined, return null
        if (obj === null || obj === undefined) {
            throw new Error(`Cannot convert object to Bill: input is not a valid object: ${JSON.stringify(obj)}`);
        }
        return new Bill(
            obj.id,
            obj.month,
            new Date(obj.creationDate),
            new Date(obj.dueDate),
            Plan.fromObject(obj.plan),
            obj.users,
            obj.activeUsers,
            obj.credentials,
            obj.activeCredentials,
            obj.invoices,
            obj.subscribedCollectors,
            obj.usedCollectors,
            obj.activeCollectors,
        );
    }

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
    subscribedCollectors: number;
    usedCollectors: number;
    activeCollectors: number;

    /**
     * Constructs a new Invoice-Collector Bill (internal invoice).
     * Unlike invoice that are collected for users, bills are used for internal accounting purposes.
     * @param id The unique identifier of the internal bill.
     * @param month The month of the bill.
     * @param creationDate The creation date of the bill.
     * @param dueDate The due date of the bill.
     * @param plan The plan associated with the bill.
     * @param users The total number of users.
     * @param activeUsers The number of active users. A user is concidered active if at least one invoice has been issued for them.
     * @param credentials The total number of credentials.
     * @param activeCredentials The number of active credentials. A credential is considered active if at least one invoice has been issued for it.
     * @param invoices The total number of invoices associated with the bill.
     * @param subscribedCollectors The total number of subscribed collectors.
     * @param usedCollectors The total number of used collectors. A collector is considered used if it has been utilized in at least one credential.
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
        subscribedCollectors: number,
        usedCollectors: number,
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
        this.subscribedCollectors = subscribedCollectors;
        this.usedCollectors = usedCollectors;
        this.activeCollectors = activeCollectors;
    }
}