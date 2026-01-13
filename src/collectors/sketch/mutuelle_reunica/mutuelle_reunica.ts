
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleReunicaCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_reunica",
        name: "Mutuelle Reunica",
        description: "i18n.collectors.mutuelle_reunica.description",
        version: "0",
        website: "https://inscription.ag2rlamondiale.fr/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130500.jpg",
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
        loginUrl: "https://inscription.ag2rlamondiale.fr/connexion/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleReunicaCollector.CONFIG);
    }
}
