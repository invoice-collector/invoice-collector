import { AbstractCollector, Invoice, CompleteInvoice, CollectorType, CollectorState, CollectorCaptcha } from "./abstractCollector";
import { UnfinishedCollectorError } from '../error';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/state";

export type SketchConfig = {
    id: string,
    name: string,
    description: string,
    version: string,
    website: string,
    logo: string,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    }
}

export abstract class SketchCollector extends AbstractCollector {

    constructor(config: SketchConfig) {
        super({
            ...config,
            type: CollectorType.SKETCH,
            useProxy: false,
            state: CollectorState.DEVELOPMENT,
            loadImages: false,
            autoLogin: {}   // No auto login by default
        });
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        throw new UnfinishedCollectorError(this);
    }

    async _download(invoice: Invoice): Promise<CompleteInvoice> {
        throw new UnfinishedCollectorError(this);
    }
}
