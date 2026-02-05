
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CircleKIrelandBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "circle_k_ireland_business",
        name: "CIRCLE K - Ireland Business",
        description: "i18n.collectors.circle_k_ireland_business.description",
        version: "0",
        website: "https://www.circlek.ie/business/fuel-card/login-to-your-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123134.jpg",
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
        loginUrl: "https://www.circlek.ie/business/fuel-card/login-to-your-account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CircleKIrelandBusinessCollector.CONFIG);
    }
}
