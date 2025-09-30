import { Invoice, CompleteInvoice, CollectorType, CollectorState, Config } from "./abstractCollector";
import { V1Collector } from "./v1Collector";
import { UnfinishedCollectorError } from '../error';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/state";

export type SketchConfig = Config & {
    entryUrl: string
}

export abstract class SketchCollector extends V1Collector<SketchConfig> {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            state: CollectorState.DEVELOPMENT
        });
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        throw new UnfinishedCollectorError(this);
    }

    async _download(invoice: Invoice): Promise<CompleteInvoice> {
        throw new UnfinishedCollectorError(this);
    }

    async _close(): Promise<void> {
        // Assume the collector does not need to close anything
    }
}
