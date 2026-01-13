
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BanquePopulaireBredCollector extends SketchCollector {

    static CONFIG = {
        id: "banque_populaire_bred",
        name: "Banque Populaire Bred",
        description: "i18n.collectors.banque_populaire_bred.description",
        version: "0",
        website: "https://www.bred.fr/authentification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/114323.jpg",
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
        loginUrl: "https://www.bred.fr/authentification",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BanquePopulaireBredCollector.CONFIG);
    }
}
