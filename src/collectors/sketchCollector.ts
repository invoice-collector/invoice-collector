import { Invoice, CompleteInvoice, CollectorType, CollectorState, Config } from "./abstractCollector";
import { V2Collector } from "./v2Collector";
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/state";

export type SketchConfig = Config & {
    entryUrl: string
}

export abstract class SketchCollector extends V2Collector<SketchConfig> {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.DEVELOPMENT
        });
    }

    async _collect(
        state: State,
        twofa_promise: TwofaPromise,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: any[],
        location: Location | null
    ): Promise<CompleteInvoice[]> {
        // Return an empty array as this is just a sketch collector
        return [];
    }

    async _close(): Promise<void> {
        // Nothing to close
    }
}
