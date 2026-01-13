
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaPosteMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_mobile",
        name: "La Poste Mobile",
        description: "i18n.collectors.la_poste_mobile.description",
        version: "0",
        website: "https://lapostemobile.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/8/80/LaPosteMobile-2025.svg",
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
        loginUrl: "https://espaceclient.lapostemobile.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaPosteMobileCollector.CONFIG);
    }
}
