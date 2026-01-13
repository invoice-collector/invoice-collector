import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauDeGrenobleAlpesCollector extends SketchCollector {

    static CONFIG = {
        id: "eaudegrenoblealpes",
        name: "Eau de Grenoble Alpes",
        description: "i18n.collectors.eaudegrenoblealpes.description",
        version: "0",
        website: "https://eau.grenoblealpesmetropole.fr",
        logo: "https://www.somei.fr/site2017/wp-content/uploads/2019/05/Sans-titre-1.jpg",
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
        loginUrl: "https://eau.grenoblealpesmetropole.fr/#/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauDeGrenobleAlpesCollector.CONFIG);
    }
}
