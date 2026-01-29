
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TwilioCollector extends SketchCollector {

    static CONFIG = {
        id: "twilio",
        name: "twilio",
        description: "i18n.collectors.twilio.description",
        version: "0",
        website: "https://www.twilio.com/console/billing/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7157.jpg",
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
        loginUrl: "https://www.twilio.com/console/billing/payment-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TwilioCollector.CONFIG);
    }
}
