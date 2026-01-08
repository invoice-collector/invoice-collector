
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaymoCollector extends SketchCollector {

    static CONFIG = {
        id: "paymo",
        name: "paymo",
        description: "i18n.collectors.paymo.description",
        version: "0",
        website: "https://app.paymoapp.com/#Paymo.module.subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8064.jpg",
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
        loginUrl: "https://app.paymoapp.com/#Paymo.module.subscription/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaymoCollector.CONFIG);
    }
}
