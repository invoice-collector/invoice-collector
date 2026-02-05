import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoriolisCollector extends SketchCollector {

    static CONFIG = {
        id: "coriolis",
        name: "Coriolis",
        description: "i18n.collectors.coriolis.description",
        version: "0",
        website: "https://coriolis.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/e/e6/Logo_Coriolis_Telecom.svg",
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
        loginUrl: "https://espaceclient.coriolis.com/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CoriolisCollector.CONFIG);
    }
}
