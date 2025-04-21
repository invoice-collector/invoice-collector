import { Collect } from "./collect";

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

    public registerCollect(id: string, collect: Collect): void {
        this.collects.set(id, collect);
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