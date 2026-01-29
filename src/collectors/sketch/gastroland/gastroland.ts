import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GastrolandCollector extends SketchCollector {

    static CONFIG = {
        id: "gastroland",
        name: "Gastroland",
        description: "i18n.collectors.gastroland.description",
        version: "0",
        website: "https://www.gastroland.fr",
        logo: "https://www.gastroland.fr/img/logo-1649749041.jpg",
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
        loginUrl: "https://www.gastroland.fr/fr/connexion?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GastrolandCollector.CONFIG);
    }
}
