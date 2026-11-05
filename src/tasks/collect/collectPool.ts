import { EventEmitter } from 'stream';
import { Collect } from './collect';

export class CollectPool extends EventEmitter {

    public static DEFAULT_FINISHED_TIMEOUT: number = 10 * 60 * 1000; // 10 minutes
    private static instance: CollectPool;

    /**
     * Gets the singleton instance of the CollectPool.
     * @returns The currently loaded CollectPool instance.
     */
    public static getInstance(): CollectPool {
        if (!CollectPool.instance) {
            CollectPool.instance = new CollectPool();
        }
        return CollectPool.instance;
    }

    private collects: Map<string, Collect>;
    private terminating: boolean = false;

    /**
     * Constructs an instance of the CollectPool class.
     * The point of this class is to identify the collection that are currently in progress.
     */
    private constructor() {
        super();
        this.collects = new Map();
    }

    /**
     * Registers a collect only if none is already in progress for `id`.
     * @param id The ID of the collect to register.
     * @param collect The collect instance to register.
     * @returns Whether the collect was registered.
     */
    public registerCollect(id: string, collect: Collect): {
        registered: boolean,
        collect: Collect
    } {
        if (this.collects.has(id)) {
            return {
                registered: false,
                collect: this.collects.get(id)!
            };
        }
        this.collects.set(id, collect);
        return {
            registered: true,
            collect
        };
    }

    /**
     * Unregisters a collect for the specified ID.
     * @param id The ID of the collect to unregister.
     */
    public unregisterCollect(id: string): void {
        this.collects.delete(id);
        // Trigger finish event if no more collects are in progress
        if (this.collects.size === 0 && this.terminating) {
            this.emit('finish');
        }
    }

    /**
     * Gets the collect instance for the specified ID, if it exists.
     * @param id The ID of the collect to retrieve.
     * @returns The collect instance associated with the ID, or undefined if not found.
     */
    public get(id: string): Collect | undefined {
        return this.collects.get(id);
    }

    /**
     * Checks if a collect instance exists for the specified ID.
     * @param id The ID of the collect to check.
     * @returns True if a collect instance exists for the ID, false otherwise.
     */
    public has(id: string): boolean {
        return this.collects.has(id);
    }

    public async waitForAllCollectsToFinish(): Promise<void> {
        this.terminating = true;
        if (this.collects.size === 0) {
            return;
        }

        // Wait for the 'finish' event to be emitted, indicating all collects have finished
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, CollectPool.DEFAULT_FINISHED_TIMEOUT);
            this.once('finish', () => {
                resolve();
            });
        });
    }
}