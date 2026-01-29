
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelfortCollector extends SketchCollector {

    static CONFIG = {
        id: "telfort",
        name: "Telfort",
        description: "i18n.collectors.telfort.description",
        version: "0",
        website: "https://www.telfort.nl/persoonlijk/inloggen-mijn-telfort.htm#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9476.jpg",
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
        loginUrl: "https://www.telfort.nl/persoonlijk/inloggen-mijn-telfort.htm#/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelfortCollector.CONFIG);
    }
}
