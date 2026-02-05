
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CavecParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "cavec_particulier",
        name: "CAVEC - Particulier",
        description: "i18n.collectors.cavec_particulier.description",
        version: "0",
        website: "https://www.macavecenligne.fr/cavec/servlet/XASFormConnexion?base=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105277.jpg",
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
        loginUrl: "https://www.macavecenligne.fr/cavec/servlet/XASFormConnexion?base=0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CavecParticulierCollector.CONFIG);
    }
}
