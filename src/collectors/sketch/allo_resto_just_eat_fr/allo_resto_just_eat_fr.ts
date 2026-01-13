
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlloRestoJustEatFrCollector extends SketchCollector {

    static CONFIG = {
        id: "allo_resto_just_eat_fr",
        name: "Allo Resto (Just Eat FR)",
        description: "i18n.collectors.allo_resto_just_eat_fr.description",
        version: "0",
        website: "https://www.just-eat.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27507.jpg",
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
        loginUrl: "https://www.just-eat.fr/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlloRestoJustEatFrCollector.CONFIG);
    }
}
