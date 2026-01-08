import { CollectorType, CollectorState } from "./abstractCollector";
import { WebCollector, WebConfig } from "./webCollector";
import { Driver, Element } from "../driver/driver";

export type SketchConfig = WebConfig & {
}

export abstract class SketchCollector extends WebCollector {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.DEVELOPMENT,
            enableInteractiveLogin: true
        });
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return [];
    }

    async _close(): Promise<void> {
        // Nothing to close
    }
}
