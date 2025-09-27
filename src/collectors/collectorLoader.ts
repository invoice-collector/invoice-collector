import { AbstractCollector } from './abstractCollector';
import { StatusError } from '../error';
import { collectors as sketchCollectors } from './sketch/loader';
import { collectors as communityCollectors } from './community/loader';
import { collectors as coreCollectors } from './core/loader';
let premiumCollectors: any[] = [];
try {
    premiumCollectors = require('./premifum/loader').collectors;
} catch (e) {
    // No premium collectors
}

export class CollectorLoader {
    private static collectors: Map<string, any> = new Map();

    static load(): Map<string, any> {
        this.loadFolders("sketch", sketchCollectors)
        this.loadFolders("community", communityCollectors)
        this.loadFolders("core", coreCollectors)
        this.loadFolders("premium", premiumCollectors)

        // Order collectors by id
        CollectorLoader.collectors = new Map([...CollectorLoader.collectors.entries()]
            .sort((a, b) => a[0].localeCompare(b[0])));

        // Return loaded collectors
        return CollectorLoader.collectors
    }

    private static loadFolders(name: string, collectorsClass: any[]) {
        let collectors: string[] = [];
    
        console.log(`Loading ${name} collectors...`);

        // For each collector class
        for (const collectorClass of collectorsClass) {
            const collectorInstance = new collectorClass();
            // Add it to the set
            CollectorLoader.collectors.set(collectorInstance.config.id, collectorClass);
            // Add it to the list
            collectors.push(collectorInstance.config.id);
        }

        console.log(`${collectors.length} ${name} collectors loaded: ${collectors.join(', ')}`);
    }

    public static getAll(): AbstractCollector[] {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            CollectorLoader.load();
        }
        // Return all collectors
        return Array.from(CollectorLoader.collectors.values()).map((collector: any) => new collector());
    }

    public static get(id: string): AbstractCollector {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            CollectorLoader.load();
        }
        // Find the collector with the id
        const collector = CollectorLoader.collectors.get(id.toLowerCase())

        if(collector === undefined) {
            throw new StatusError(`No collector with id "${id}" found.`, 400);
        }
        // Return the collector, or null if not found
        return new collector()
    }
}
