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

    public registerCollect(collectId: string, collect: Collect): void {
        this.collects.set(collectId, collect);
    }

    public unregisterCollect(collectId: string): void {
        this.collects.delete(collectId);
    }

    public isCollectInProgress(collectId: string): boolean {
        return this.collects.has(collectId);
    }
}