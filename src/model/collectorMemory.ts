import { DatabaseFactory } from "../database/databaseFactory";
import { Action } from "./action";

export class CollectorMemory {

    static async fromName(name: string): Promise<CollectorMemory> {    
        // Get collector memory from name or create new one
        return await DatabaseFactory.getDatabase().getCollectorMemory(name) || new CollectorMemory(name);
    }

    id: string;
    name: string;
    actions: { [key: string]: Action[] };

    constructor(name: string, actions: { [key: string]: Action[] } = {}) {
        this.id = "";
        this.name = name;
        this.actions = actions;
    }

    getActionsFor(key: string): Action[] | null {
        return this.actions.hasOwnProperty(key) ? this.actions[key] : null;
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
