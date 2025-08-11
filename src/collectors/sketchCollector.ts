import { AbstractCollector, Invoice, CompleteInvoice, CollectorType, CollectorState, CollectorCaptcha } from "./abstractCollector";
import { CollectorError } from '../error';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/credential";

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
            captcha: CollectorCaptcha.NONE,
            autoLogin: {}   // No auto login by default
        });
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        return [];
    }

    async _download(invoice: Invoice): Promise<CompleteInvoice> {
        throw new CollectorError("SketchCollector does not support downloading invoices", this);
    }
}
