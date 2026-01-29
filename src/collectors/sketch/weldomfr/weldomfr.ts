import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WeldomFrCollector extends SketchCollector {

    static CONFIG = {
        id: "weldomfr",
        name: "Weldom",
        description: "i18n.collectors.weldomfr.description",
        version: "0",
        website: "https://weldom.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_Weldom_2012.svg",
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
        loginUrl: "https://www.weldom.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WeldomFrCollector.CONFIG);
    }
}
