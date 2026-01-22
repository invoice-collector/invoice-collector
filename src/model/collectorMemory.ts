import { DatabaseFactory } from "../database/databaseFactory";
import { Action } from "./action";
import { Actions } from "./actions";

export class CollectorMemory {

    static async fromName(name: string): Promise<CollectorMemory> {
        // Get collector memory from name or create new one
        return await DatabaseFactory.getDatabase().getCollectorMemory(name) || new CollectorMemory(name, new Actions());
    }

    id: string;
    name: string;
    actions: Actions;
    customerAreaUrl?: string;
    entryUrl?: string;

    constructor(name: string, actions: Actions, customerAreaUrl?: string, entryUrl?: string) {
        this.id = "";
        this.name = name;
        this.actions = actions;
        this.customerAreaUrl = customerAreaUrl
        this.entryUrl = entryUrl;
    }

    getActionsFor(key: string): Action<unknown, unknown>[] | null {
        return this.actions.hasOwnProperty(key) ? this.actions[key] as Action<unknown, unknown>[] : null;
    }

    async commit() {
        if (this.id) {
            // Update existing collector memory
            await DatabaseFactory.getDatabase().updateCollectorMemory(this);
        }
        else {
            // Create collector memory
            await DatabaseFactory.getDatabase().createCollectorMemory(this);
        }
    }
}
