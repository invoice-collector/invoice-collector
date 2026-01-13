
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LePetitVapoteurCollector extends SketchCollector {

    static CONFIG = {
        id: "le_petit_vapoteur",
        name: "Le Petit Vapoteur",
        description: "i18n.collectors.le_petit_vapoteur.description",
        version: "0",
        website: "https://www.lepetitvapoteur.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121256.jpg",
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
        loginUrl: "https://www.lepetitvapoteur.com/fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LePetitVapoteurCollector.CONFIG);
    }
}
