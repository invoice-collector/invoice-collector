
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HukAutoweltCollector extends SketchCollector {

    static CONFIG = {
        id: "huk_autowelt",
        name: "Huk Autowelt",
        description: "i18n.collectors.huk_autowelt.description",
        version: "0",
        website: "https://www.huk-autowelt.de/order/159467/details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1313035.jpg",
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
        loginUrl: "https://www.huk-autowelt.de/order/159467/details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HukAutoweltCollector.CONFIG);
    }
}
