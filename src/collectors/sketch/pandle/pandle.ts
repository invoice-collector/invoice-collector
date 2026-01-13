
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PandleCollector extends SketchCollector {

    static CONFIG = {
        id: "pandle",
        name: "Pandle",
        description: "i18n.collectors.pandle.description",
        version: "0",
        website: "https://my.pandle.com/partner_accountant_subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778221.jpg",
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
        loginUrl: "https://my.pandle.com/partner_accountant_subscriptions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PandleCollector.CONFIG);
    }
}
