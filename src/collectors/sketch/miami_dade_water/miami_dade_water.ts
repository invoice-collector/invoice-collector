
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiamiDadeWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "miami_dade_water",
        name: "Miami Dade Water",
        description: "i18n.collectors.miami_dade_water.description",
        version: "0",
        website: "https://apps.miamidade.gov/wasdservice/index.html#!/wasd/2227824657/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723580.jpg",
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
        loginUrl: "https://apps.miamidade.gov/wasdservice/index.html#!/wasd/2227824657/billing-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiamiDadeWaterCollector.CONFIG);
    }
}
