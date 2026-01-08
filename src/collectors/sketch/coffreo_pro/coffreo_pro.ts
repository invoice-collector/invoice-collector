
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoffreoProCollector extends SketchCollector {

    static CONFIG = {
        id: "coffreo_pro",
        name: "Coffreo - Pro",
        description: "i18n.collectors.coffreo_pro.description",
        version: "0",
        website: "https://www.coffreo.pro/documents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642452.jpg",
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
        loginUrl: "https://www.coffreo.pro/documents/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoffreoProCollector.CONFIG);
    }
}
