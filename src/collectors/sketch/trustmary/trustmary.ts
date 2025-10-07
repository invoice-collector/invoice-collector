
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrustmaryCollector extends SketchCollector {

    static CONFIG = {
        id: "trustmary",
        name: "Trustmary",
        description: "i18n.collectors.trustmary.description",
        version: "0",
        website: "https://app.trustmary.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197496.jpg",
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
        entryUrl: "https://app.trustmary.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrustmaryCollector.CONFIG);
    }
}
