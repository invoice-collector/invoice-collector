
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VanDerPlasCollector extends SketchCollector {

    static CONFIG = {
        id: "van_der_plas",
        name: "Van der Plas",
        description: "i18n.collectors.van_der_plas.description",
        version: "0",
        website: "https://shop.vdplas.com/Service/Factuur",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049656.jpg",
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
        loginUrl: "https://shop.vdplas.com/Service/Factuur",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VanDerPlasCollector.CONFIG);
    }
}
