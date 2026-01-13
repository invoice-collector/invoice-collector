
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ButCollector extends SketchCollector {

    static CONFIG = {
        id: "but",
        name: "But",
        description: "i18n.collectors.but.description",
        version: "0",
        website: "https://www.but.fr/Customer/Account/Identification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115965.jpg",
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
        loginUrl: "https://www.but.fr/Customer/Account/Identification",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ButCollector.CONFIG);
    }
}
