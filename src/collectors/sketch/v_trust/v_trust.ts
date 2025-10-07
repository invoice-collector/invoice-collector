
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VTrustCollector extends SketchCollector {

    static CONFIG = {
        id: "v_trust",
        name: "V-TRUST",
        description: "i18n.collectors.v_trust.description",
        version: "0",
        website: "https://www.v-trust.com/My/Payment/List.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106549.jpg",
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
        entryUrl: "https://www.v-trust.com/My/Payment/List.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VTrustCollector.CONFIG);
    }
}
