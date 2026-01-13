
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EspaceFamilleArpegeCollector extends SketchCollector {

    static CONFIG = {
        id: "espace_famille_arpege",
        name: "Espace Famille (Arpege)",
        description: "i18n.collectors.espace_famille_arpege.description",
        version: "0",
        website: "https://espaceclients.arpege.fr/Accueil/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106550.jpg",
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
        loginUrl: "https://espaceclients.arpege.fr/Accueil/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EspaceFamilleArpegeCollector.CONFIG);
    }
}
