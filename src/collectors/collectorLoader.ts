import fs from 'fs';
import path from 'path';
import { AbstractCollector } from './abstractCollector';
import { StatusError } from '../error';

export class CollectorLoader {
    private static collectors: Map<string, any> = new Map();

    static load(filter: string | null = null) {
        this.loadFolders("sketch", filter)
        this.loadFolders("community", filter)
        this.loadFolders("core", filter)
        this.loadFolders("premium", filter)

        //Order collectors by id
        CollectorLoader.collectors = new Map([...CollectorLoader.collectors.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    }

    private static loadFolders(folder: string, filter: string | null) {
        let collectors: string[] = [];

        // Compute path to folder
        const fullPath = path.join(__dirname, folder)

        // Dynamically import all collectors
        const folders = fs.readdirSync(fullPath, { withFileTypes: true });

        console.log(`Loading ${folder} collectors from ${fullPath}`);
        // List all folders in the directory
        for (const folder of folders) {
            // Skip if not a directory
            if (!folder.isDirectory()) {
                continue;
            }

            // Log a warning if the folder name contains spaces or hyphens
            if (folder.name.includes(' ') || folder.name.includes('-')) {
                console.warn(`Folder name "${folder.name}" contains spaces or hyphens. Please rename the folder and use underscrores instead`);
                continue;
            }

            // Skip if a filter is provided and the folder name does not match the filter
            if (filter && folder.name !== filter) {
                continue;
            }

            // Build the file path
            const file = path.join(fullPath, folder.name, folder.name + ".ts");

            // Check if the file exists
            if (!fs.existsSync(file)) {
                console.warn(`File "${file}" does not exist`);
                continue;
            }

            // Load file
            const importedModule = require(file);
            // For each class in the file
            for (const classKey of Object.keys(importedModule)) {
                // Check if the class is a collector
                if (typeof importedModule[classKey] === 'function' && classKey.endsWith('Collector')) {
                    // Instanciate the collector
                    let collector = importedModule[classKey];
                    // Set the id of the collector to the folder name
                    const collectorInstance = new collector();
                    // Add it to the set
                    CollectorLoader.collectors.set(collectorInstance.config.id, collector);
                    // Add it to the list
                    collectors.push(collectorInstance.config.id);
                }
            }
        }

        console.log(`${collectors.length} ${folder} collectors loaded: ${collectors.join(', ')}`);
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
