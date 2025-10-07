
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LogpayMobilityCollector extends SketchCollector {

    static CONFIG = {
        id: "logpay_mobility",
        name: "Logpay mobility",
        description: "i18n.collectors.logpay_mobility.description",
        version: "0",
        website: "https://mandator.logpay.de/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1241024.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://mandator.logpay.de/dokumente",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LogpayMobilityCollector.CONFIG);
    }
}
