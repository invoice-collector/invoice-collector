
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LightspeedhqComEcommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeedhq_com_ecommerce",
        name: "lightspeedhq.com - ecommerce",
        description: "i18n.collectors.lightspeedhq_com_ecommerce.description",
        version: "0",
        website: "https://www.lightspeedhq.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20476.jpg",
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
        loginUrl: "https://www.lightspeedhq.com/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LightspeedhqComEcommerceCollector.CONFIG);
    }
}
