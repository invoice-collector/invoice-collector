
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauDeGaronneCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_de_garonne",
        name: "EAU DE GARONNE",
        description: "i18n.collectors.eau_de_garonne.description",
        version: "0",
        website: "https://mon-espace.eaudegaronne.fr/fr/accueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199017.jpg",
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
        loginUrl: "https://mon-espace.eaudegaronne.fr/fr/accueil",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EauDeGaronneCollector.CONFIG);
    }
}
