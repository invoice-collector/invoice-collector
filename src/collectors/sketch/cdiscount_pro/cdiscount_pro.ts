
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CdiscountProCollector extends SketchCollector {

    static CONFIG = {
        id: "cdiscount_pro",
        name: "Cdiscount Pro",
        description: "i18n.collectors.cdiscount_pro.description",
        version: "0",
        website: "https://order.cdiscount.com/Account/LoginLight.html?referrer=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1543692.jpg",
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
        loginUrl: "https://order.cdiscount.com/Account/LoginLight.html?referrer=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CdiscountProCollector.CONFIG);
    }
}
