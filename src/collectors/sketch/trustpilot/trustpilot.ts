
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrustpilotCollector extends SketchCollector {

    static CONFIG = {
        id: "trustpilot",
        name: "Trustpilot",
        description: "i18n.collectors.trustpilot.description",
        version: "0",
        website: "https://businessapp.b2b.trustpilot.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/844417.jpg",
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
        entryUrl: "https://businessapp.b2b.trustpilot.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrustpilotCollector.CONFIG);
    }
}
