
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HiltiCollector extends SketchCollector {

    static CONFIG = {
        id: "hilti",
        name: "Hilti",
        description: "i18n.collectors.hilti.description",
        version: "0",
        website: "https://www.hilti.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16593.jpg",
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
        loginUrl: "https://www.hilti.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HiltiCollector.CONFIG);
    }
}
