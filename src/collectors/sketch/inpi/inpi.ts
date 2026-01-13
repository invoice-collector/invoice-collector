
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InpiCollector extends SketchCollector {

    static CONFIG = {
        id: "inpi",
        name: "Inpi",
        description: "i18n.collectors.inpi.description",
        version: "0",
        website: "https://www.inpi.fr/",
        logo: "https://upload.wikimedia.org/wikipedia/fr/a/ab/Logo-inpi.svg",
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
        loginUrl: "https://www.inpi.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InpiCollector.CONFIG);
    }
}
