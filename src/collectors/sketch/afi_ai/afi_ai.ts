
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AfiAiCollector extends SketchCollector {

    static CONFIG = {
        id: "afi_ai",
        name: "afi.ai",
        description: "i18n.collectors.afi_ai.description",
        version: "0",
        website: "https://app.afi.ai/orgs/01GVDMXKVWW0DGEY2Y6DX7JF5R/billing/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863235.jpg",
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
        loginUrl: "https://app.afi.ai/orgs/01GVDMXKVWW0DGEY2Y6DX7JF5R/billing/payment-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AfiAiCollector.CONFIG);
    }
}
