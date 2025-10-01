import path from 'path';
import glob from 'glob';
import fs from 'fs';
import { AbstractCollector, CollectorCaptcha, Config } from './abstractCollector';
import { StatusError } from '../error';
import { CollectorState } from './abstractCollector';

export class CollectorLoader {
    private static collectors: Map<string, {config: Config, file: string}> = new Map();

    static async load(filter: string | null = null): Promise<Map<string, {config: Config, file: string}>> {
        await this.loadFolders("sketch", "sketch", filter)
        await this.loadFolders("community", "community", filter)
        await this.loadFolders("core", "core", filter)
        await this.loadFolders("premium", "../premium/collectors", filter)

        //Order collectors by id
        CollectorLoader.collectors = new Map([...CollectorLoader.collectors.entries()]
            .sort((a, b) => a[0].localeCompare(b[0])));

        // Return loaded collectors
        return CollectorLoader.collectors
    }

    private static async loadFolders(name: string, folder: string, filter: string | null) {
        const strPattern = filter ? `./${folder}/${filter}/*.ts` : `./${folder}/*/*.ts`;
        const pattern = path.join(__dirname, strPattern);

        await new Promise<void>((resolve, reject) => {
            glob(pattern, (err, files) => {
            console.log(`Loading ${name} collectors...`);
            if (err) {
                console.error('Error finding files:', err);
                reject(err);
            }
            let nbFFilesLoaded = 0;
            for (const file of files) {
                if(file.endsWith('selectors.ts')) {
                    continue; // Skip selectors files
                }

                // Read the file content
                const content = fs.readFileSync(file, 'utf8');

                const configMatch = content.match(/CONFIG\s*=\s*({[\s\S]*?})\s*constructor/);
                if (configMatch) {
                try {
                    // Replace enum references with their values before eval
                    let configStr = configMatch[1]
                    .replace("CollectorState.DEVELOPMENT", `"${CollectorState.DEVELOPMENT.toString()}"`)
                    .replace("CollectorCaptcha.CLOUDFLARE", `"${CollectorCaptcha.CLOUDFLARE.toString()}"`)
                    .replace("CollectorCaptcha.DATADOME", `"${CollectorCaptcha.DATADOME.toString()}"`)

                    // Evaluate the config object
                    const config = eval('(' + configStr + ')');
                    if (config && config.id) {
                    CollectorLoader.collectors.set(config.id.toLowerCase(), { config, file });
                    nbFFilesLoaded++;
                    }
                } catch (e) {
                    reject(new Error(`Failed to parse CONFIG in ${file}: ${e}`));
                }
                }
                else {
                reject(new Error(`No CONFIG found in ${file}`));
                }
            }
            console.log(`${nbFFilesLoaded} ${name} collectors loaded`);
            resolve();
            });
        });
    }

    public static async getAll(): Promise<Config[]> {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            await CollectorLoader.load();
        }
        // Return all collectors
        return Array.from(CollectorLoader.collectors.values()).map((collector) => collector.config);
    }

    public static async get(id: string): Promise<AbstractCollector<Config>> {
        //Check if collectors are loaded
        if (CollectorLoader.collectors.size == 0) {
            await CollectorLoader.load();
        }
        // Find the collector with the id
        const collector = CollectorLoader.collectors.get(id.toLowerCase())

        if(collector === undefined) {
            throw new StatusError(`No collector with id "${id}" found.`, 400);
        }
        
        // Load the collector class
        const collectorModule = await import(collector.file);
        // For each export in the module
        for (const classKey of Object.keys(collectorModule)) {
            // Check if the class is a collector
            if (typeof collectorModule[classKey] === 'function' && classKey.endsWith('Collector')) {
                // Instanciate the collector
                let collector = collectorModule[classKey];
                // Set the id of the collector to the folder name
                return new collector();
            }
        }
        // Throw error if no collector class found
        throw new StatusError(`Unable to load collector "${id}".`, 400);
    }
}
