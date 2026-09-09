import { Collect } from './collect';

export class CollectPool {

    private static instance: CollectPool;

    public static getInstance(): CollectPool {
        if (!CollectPool.instance) {
            CollectPool.instance = new CollectPool();
        }
        return CollectPool.instance;
    }

    private collects: Map<string, Collect>;

    private constructor() {
        this.collects = new Map();
    }

    /**
     * Registers a collect only if none is already in progress for `id`.
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

    public unregisterCollect(id: string): void {
        this.collects.delete(id);
    }

    public get(id: string): Collect | undefined {
        return this.collects.get(id);
    }

    public has(id: string): boolean {
        return this.collects.has(id);
    }
}