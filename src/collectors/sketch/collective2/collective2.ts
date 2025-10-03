
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Collective2Collector extends SketchCollector {

    static CONFIG = {
        id: "collective2",
        name: "Collective2",
        description: "i18n.collectors.collective2.description",
        version: "0",
        website: "https://collective2.com/payment-records",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/146176.jpg",
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
        entryUrl: "https://collective2.com/payment-records",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Collective2Collector.CONFIG);
    }
}
