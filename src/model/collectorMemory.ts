import { DatabaseFactory } from "../database/databaseFactory";
import { Action } from "./action";
import { Actions } from "./actions";

export class CollectorMemory {

    static async fromCollectorId(collector_id: string): Promise<CollectorMemory> {
        // Get collector memory from collector_id or create new one
        return await DatabaseFactory.getDatabase().getCollectorMemory(collector_id) || new CollectorMemory(collector_id, new Actions());
    }

    id: string;
    collector_id: string;
    actions: Actions;
    customerAreaUrl?: string;
    entryUrl?: string;

    constructor(collector_id: string, actions: Actions, customerAreaUrl?: string, entryUrl?: string) {
        this.id = "";
        this.collector_id = collector_id;
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
