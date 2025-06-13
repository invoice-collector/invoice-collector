import fs from 'fs';
import path from 'path';
import { AbstractCollector } from './abstractCollector';

export class CollectorLoader {
    private static collectors: Map<string, AbstractCollector> = new Map();

    static load(filter: string | null = null) {
        this.loadFolders("core", filter)
    }

    private static loadFolders(folder: string, filter: string | null) {
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
                    let collector = new importedModule[classKey]();
                    // Set the id of the collector to the folder name
                    collector.config.id = folder.name;
                    // Add it to the list
                    CollectorLoader.collectors.set(collector.config.id, collector);
                }
            }
        }

        console.log(`${CollectorLoader.collectors.size} collectors loaded: ${Array.from(CollectorLoader.collectors.keys()).join(', ')}`);
    }

    public static getAll(): Map<string, AbstractCollector> {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            CollectorLoader.load();
        }
        // Return all collectors
        return CollectorLoader.collectors;
    }

    public static get(id: string): AbstractCollector | null {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            CollectorLoader.load();
        }
        // Find the collector with the id
        const collector = CollectorLoader.collectors.get(id.toLowerCase())

        if(collector === undefined) {
            throw new Error(`No collector with id "${id}" found`);
        }
        // Return the collector, or null if not found
        return collector
    }
}
