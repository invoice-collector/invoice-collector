
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QuadientCollector extends SketchCollector {

    static CONFIG = {
        id: "quadient",
        name: "Quadient",
        description: "i18n.collectors.quadient.description",
        version: "0",
        website: "https://www.myquadient.fr/FR/fr/CustomerLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/508960.jpg",
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
        loginUrl: "https://www.myquadient.fr/FR/fr/CustomerLogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QuadientCollector.CONFIG);
    }
}
