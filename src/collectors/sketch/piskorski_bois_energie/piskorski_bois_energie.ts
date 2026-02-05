
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PiskorskiBoisEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "piskorski_bois_energie",
        name: "Piskorski - Bois Energie",
        description: "i18n.collectors.piskorski_bois_energie.description",
        version: "0",
        website: "https://www.piskorski-bois-energie.fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122464.jpg",
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
        loginUrl: "https://www.piskorski-bois-energie.fr/authentification?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PiskorskiBoisEnergieCollector.CONFIG);
    }
}
