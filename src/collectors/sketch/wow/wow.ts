
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WowCollector extends SketchCollector {

    static CONFIG = {
        id: "wow",
        name: "WOW",
        description: "i18n.collectors.wow.description",
        version: "0",
        website: "https://www.wowtv.de/login?return=/konto/abrechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1298828.jpg",
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
        loginUrl: "https://www.wowtv.de/login?return=/konto/abrechnung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WowCollector.CONFIG);
    }
}
