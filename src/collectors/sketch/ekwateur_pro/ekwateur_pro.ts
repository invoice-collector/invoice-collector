
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EkwateurProCollector extends SketchCollector {

    static CONFIG = {
        id: "ekwateur_pro",
        name: "Ekwateur PRO",
        description: "i18n.collectors.ekwateur_pro.description",
        version: "0",
        website: "https://espace-energie.ekwateur.fr/search/regroupement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919573.jpg",
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
        loginUrl: "https://espace-energie.ekwateur.fr/search/regroupement",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EkwateurProCollector.CONFIG);
    }
}
