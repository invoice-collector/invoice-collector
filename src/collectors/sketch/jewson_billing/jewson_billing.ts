
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JewsonBillingCollector extends SketchCollector {

    static CONFIG = {
        id: "jewson_billing",
        name: "Jewson Billing",
        description: "i18n.collectors.jewson_billing.description",
        version: "0",
        website: "https://billing.jewson.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/220994.jpg",
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
        loginUrl: "https://billing.jewson.co.uk/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JewsonBillingCollector.CONFIG);
    }
}
