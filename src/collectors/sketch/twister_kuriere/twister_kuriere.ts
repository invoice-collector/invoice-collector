
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TwisterKuriereCollector extends SketchCollector {

    static CONFIG = {
        id: "twister_kuriere",
        name: "Twister Kuriere",
        description: "i18n.collectors.twister_kuriere.description",
        version: "0",
        website: "https://kp.twisterkuriere.de/portal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27208.jpg",
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
        loginUrl: "https://kp.twisterkuriere.de/portal/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TwisterKuriereCollector.CONFIG);
    }
}
