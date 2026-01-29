
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScvWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "scv_water",
        name: "SCV Water",
        description: "i18n.collectors.scv_water.description",
        version: "0",
        website: "https://webpay.yourscvwater.com/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179064.jpg",
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
        loginUrl: "https://webpay.yourscvwater.com/app/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ScvWaterCollector.CONFIG);
    }
}
