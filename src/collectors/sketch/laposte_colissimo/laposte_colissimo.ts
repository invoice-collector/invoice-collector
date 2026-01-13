import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaposteColissimoCollector extends SketchCollector {

    static CONFIG = {
        id: "laposte_colissimo",
        name: "La Poste Colissimo",
        description: "i18n.collectors.laposte_colissimo.description",
        version: "0",
        website: "https://www.colissimo.entreprise.laposte.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/3/39/Colissimo_Logo.svg",
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
        loginUrl: "https://www.colissimo.entreprise.laposte.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaposteColissimoCollector.CONFIG);
    }
}
