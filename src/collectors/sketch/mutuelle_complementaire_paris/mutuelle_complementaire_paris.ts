
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleComplementaireParisCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_complementaire_paris",
        name: "Mutuelle Complementaire Paris",
        description: "i18n.collectors.mutuelle_complementaire_paris.description",
        version: "0",
        website: "https://mcvpap.mc602.fr/espaceadherents/login-adherent_new.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127703.jpg",
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
        loginUrl: "https://mcvpap.mc602.fr/espaceadherents/login-adherent_new.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleComplementaireParisCollector.CONFIG);
    }
}
