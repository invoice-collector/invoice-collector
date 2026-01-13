
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutualeseEspaceClientsCollector extends SketchCollector {

    static CONFIG = {
        id: "mutualese_espace_clients",
        name: "Mutualese - Espace Clients",
        description: "i18n.collectors.mutualese_espace_clients.description",
        version: "0",
        website: "https://www.espaceclients.mutualease-cml.com/espaceclients/initlogin.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417389.jpg",
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
        loginUrl: "https://www.espaceclients.mutualease-cml.com/espaceclients/initlogin.htm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutualeseEspaceClientsCollector.CONFIG);
    }
}
