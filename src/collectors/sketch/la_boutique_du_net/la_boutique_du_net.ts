
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaBoutiqueDuNetCollector extends SketchCollector {

    static CONFIG = {
        id: "la_boutique_du_net",
        name: "La boutique du net",
        description: "i18n.collectors.la_boutique_du_net.description",
        version: "0",
        website: "https://www.laboutiquedunet.com/c-connexion/Connexion.html?ProcessusOrigine=&PageOrigine=&Var1Origine=&Var2Origine=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120858.jpg",
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
        loginUrl: "https://www.laboutiquedunet.com/c-connexion/Connexion.html?ProcessusOrigine=&PageOrigine=&Var1Origine=&Var2Origine=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LaBoutiqueDuNetCollector.CONFIG);
    }
}
