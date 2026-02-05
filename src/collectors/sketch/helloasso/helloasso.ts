import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HelloAssoCollector extends SketchCollector {

    static CONFIG = {
        id: "helloasso",
        name: "HelloAsso",
        description: "i18n.collectors.helloasso.description",
        version: "0",
        website: "https://helloasso.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/27/Logo-HelloAsso.svg",
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
        loginUrl: "https://auth.helloasso.com/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HelloAssoCollector.CONFIG);
    }
}
