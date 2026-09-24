import { DatabaseFactory } from '../database/databaseFactory';
import { Action } from './action';
import { Actions } from './actions';
import { ActionV2 } from './actionV2';

export class CollectorMemory {

    /**
     * Get the collector memory for the given collector ID. If it does not exist, create a new one.
     * @param collector_id The ID of the collector.
     * @returns The collector memory associated with the given collector ID.
     */
    static async fromCollectorId(collector_id: string): Promise<CollectorMemory> {
        // Get collector memory from collector_id or create new one
        return await DatabaseFactory.getDatabase().getCollectorMemory(collector_id) || new CollectorMemory(collector_id, new Actions(), []);
    }

    id: string;
    collector_id: string;
    actions: Actions;
    actionsV2: ActionV2<any, any, any>[];
    customerAreaUrl?: string;
    entryUrl?: string;
    tips?: string;

    /**
     * Constructs a new instance of the CollectorMemory class.
     * @param collector_id The ID of the collector.
     * @param actions The actions associated with the collector memory.
     * @param actionsV2 The V2 actions associated with the collector memory.
     * @param customerAreaUrl The URL of the customer area.
     * @param entryUrl The entry URL.
     * @param tips Any tips associated with the collector memory.
     */
    constructor(
        collector_id: string,
        actions: Actions,
        actionsV2: ActionV2<any, any, any>[],
        customerAreaUrl?: string,
        entryUrl?: string,
        tips?: string,
    ) {
        this.id = '';
        this.collector_id = collector_id;
        this.actions = actions;
        this.actionsV2 = actionsV2;
        this.customerAreaUrl = customerAreaUrl;
        this.entryUrl = entryUrl;
        this.tips = tips;
    }

    /**
     * Gets the actions associated with the given key.
     * @param key The key for which to retrieve actions.
     * @returns The actions associated with the given key, or null if none exist.
     */
    getActionsFor(key: string): Action<unknown, unknown>[] | null {
        return this.actions.hasOwnProperty(key) ? this.actions[key] as Action<unknown, unknown>[] : null;
    }

    /**
     * Commits the current state of the collector memory to the database.
     * Creates a new collector memory entry if it does not already exist.
     * Updates the existing entry otherwise.
     */
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
