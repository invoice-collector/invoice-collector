
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PayboxBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "paybox_business",
        name: "paybox Business",
        description: "i18n.collectors.paybox_business.description",
        version: "0",
        website: "https://www.paybox.at/csm-vso01-paybox/login.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68984.jpg",
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
        loginUrl: "https://www.paybox.at/csm-vso01-paybox/login.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PayboxBusinessCollector.CONFIG);
    }
}
