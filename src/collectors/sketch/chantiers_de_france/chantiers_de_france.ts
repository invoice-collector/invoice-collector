
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChantiersDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "chantiers_de_france",
        name: "Chantiers de France",
        description: "i18n.collectors.chantiers_de_france.description",
        version: "0",
        website: "https://www.chantiersdefrance.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375094.jpg",
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
        loginUrl: "https://www.chantiersdefrance.fr/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChantiersDeFranceCollector.CONFIG);
    }
}
