
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CarteQualiteVieCourbevoieCollector extends SketchCollector {

    static CONFIG = {
        id: "carte_qualite_vie_courbevoie",
        name: "Carte Qualite Vie Courbevoie",
        description: "i18n.collectors.carte_qualite_vie_courbevoie.description",
        version: "0",
        website: "https://www.ville-courbevoie.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105803.jpg",
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
        loginUrl: "https://www.ville-courbevoie.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CarteQualiteVieCourbevoieCollector.CONFIG);
    }
}
