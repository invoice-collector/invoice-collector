
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EspaceClientProOrangeCollector extends SketchCollector {

    static CONFIG = {
        id: "espace_client_pro_orange",
        name: "espace client pro Orange",
        description: "i18n.collectors.espace_client_pro_orange.description",
        version: "0",
        website: "https://espaceclientpro.orange.fr/contracts?redir=facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1724610.jpg",
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
        loginUrl: "https://espaceclientpro.orange.fr/contracts?redir=facture",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EspaceClientProOrangeCollector.CONFIG);
    }
}
