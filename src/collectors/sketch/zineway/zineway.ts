
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZinewayCollector extends SketchCollector {

    static CONFIG = {
        id: "zineway",
        name: "Zineway",
        description: "i18n.collectors.zineway.description",
        version: "0",
        website: "https://www.zineway.fr/accueil.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123812.jpg",
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
        loginUrl: "https://www.zineway.fr/accueil.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ZinewayCollector.CONFIG);
    }
}
