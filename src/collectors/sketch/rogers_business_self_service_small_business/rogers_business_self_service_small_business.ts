
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RogersBusinessSelfServiceSmallBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "rogers_business_self_service_small_business",
        name: "Rogers Business Self-service(Small Business)",
        description: "i18n.collectors.rogers_business_self_service_small_business.description",
        version: "0",
        website: "https://bss.rogers.com/bizonline/bss-login-menu.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116109.jpg",
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
        loginUrl: "https://bss.rogers.com/bizonline/bss-login-menu.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RogersBusinessSelfServiceSmallBusinessCollector.CONFIG);
    }
}
