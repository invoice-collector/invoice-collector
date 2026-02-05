
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PfdFoodsBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "pfd_foods_business",
        name: "PFD Foods (Business)",
        description: "i18n.collectors.pfd_foods_business.description",
        version: "0",
        website: "https://shop.pfdfoods.com.au/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513726.jpg",
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
        loginUrl: "https://shop.pfdfoods.com.au/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PfdFoodsBusinessCollector.CONFIG);
    }
}
