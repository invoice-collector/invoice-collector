import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaypalCollector extends SketchCollector {

    static CONFIG = {
        id: "paypal",
        name: "Paypal",
        description: "i18n.collectors.paypal.description",
        version: "0",
        website: "https://paypal.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
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
        loginUrl: "https://www.paypal.com/signin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaypalCollector.CONFIG);
    }
}
