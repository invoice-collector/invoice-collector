require('dotenv').config();
require('ts-node').register({ transpileOnly: true });
const { DatabaseFactory } = require('../src/database/databaseFactory');

const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;

async function removeOldActions(db) {
    const cutoffDate = new Date(Date.now() - SIX_MONTHS_MS);

    // Get all collector memories
    const memories = await db.getCollectorMemories();
    console.log(`Found ${memories.length} collector memories`);

    // For each memory
    for (const memory of memories) {
        let hasBeenUpdated = false;
        // For each action in the memory
        for (const actionV2 of memory.actionsV2) {
            // If the action has a lastUsed date and it's older than 6 months
            if (actionV2.lastUsed) {
                const lastUsedDate = new Date(actionV2.lastUsed);
                if (lastUsedDate < cutoffDate) {
                    // Remove the action from the memory
                    console.log(`Removing action ${actionV2.id} from collector ${memory.collector_id} (last used: ${lastUsedDate.toISOString()})`);
                    memory.actionsV2 = memory.actionsV2.filter(a => a.id !== actionV2.id);
                    hasBeenUpdated = true;
                }
            }
        }
        // If the memory was updated, save it back to the database
        if (hasBeenUpdated) {
            await memory.commit();
        }
    }
}

async function removeNonExisitngDestinationIds(db) {
    // Get all collector memories
    const memories = await db.getCollectorMemories();
    console.log(`Found ${memories.length} collector memories`);

    // Get all the existing action ids
    const existingActionIds = new Set();
    for (const memory of memories) {
        for (const actionV2 of memory.actionsV2) {
            existingActionIds.add(actionV2.id);
        }
    }

    // For each memory
    for (const memory of memories) {
        let hasBeenUpdated = false;
        // For each action in the memory
        for (const actionV2 of memory.actionsV2) {
            // If the action has a destinationId that doesn't exist in the existing action ids, remove it
            if (actionV2.destinationId && !existingActionIds.has(actionV2.destinationId)) {
                console.log(`Removing destinationId ${actionV2.destinationId} from action ${actionV2.id} in collector ${memory.collector_id} (destination does not exist)`);
                delete actionV2.destinationId;
                hasBeenUpdated = true;
            }
        }
        // If the memory was updated, save it back to the database
        if (hasBeenUpdated) {
            await memory.commit();
        }
    }
}

async function main() {
    const db = DatabaseFactory.getDatabase();
    try {
        await db.connect();
        await removeOldActions(db);
        await removeNonExisitngDestinationIds(db);
    } finally {
        await db.disconnect();
    }
}

main();
