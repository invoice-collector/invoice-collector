import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class PointEFrCollector extends SketchCollector {

    static CONFIG = {
        id: "point_e_fr",
        name: "Point E (.fr)",
        description: "i18n.collectors.point_e_fr.description",
        version: "0",
        website: "https://boutique.point-e.fr",
        logo: "https://a.storyblok.com/f/290424323215286/134x48/2954bf0c59/logo-point-e.svg",
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
        loginUrl: "https://boutique.point-e.fr/connexion?back=my-account",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PointEFrCollector.CONFIG);
    }
}
