
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RatioformCollector extends SketchCollector {

    static CONFIG = {
        id: "ratioform",
        name: "ratioform",
        description: "i18n.collectors.ratioform.description",
        version: "0",
        website: "https://www.ratioform.de/webshop/vs=de/center/main.ipm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30579.jpg",
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
        loginUrl: "https://www.ratioform.de/webshop/vs=de/center/main.ipm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RatioformCollector.CONFIG);
    }
}
