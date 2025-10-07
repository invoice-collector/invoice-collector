
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HelpheroCollector extends SketchCollector {

    static CONFIG = {
        id: "helphero",
        name: "HELPHERO",
        description: "i18n.collectors.helphero.description",
        version: "0",
        website: "https://app.helphero.co/plan/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519913.jpg",
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
        entryUrl: "https://app.helphero.co/plan/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HelpheroCollector.CONFIG);
    }
}
