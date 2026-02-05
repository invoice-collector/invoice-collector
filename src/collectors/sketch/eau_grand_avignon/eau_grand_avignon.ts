
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauGrandAvignonCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_grand_avignon",
        name: "Eau Grand Avignon",
        description: "i18n.collectors.eau_grand_avignon.description",
        version: "0",
        website: "https://www.eaugrandavignon.fr/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/666173.jpg",
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
        loginUrl: "https://www.eaugrandavignon.fr/mon-compte-en-ligne/je-me-connecte",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EauGrandAvignonCollector.CONFIG);
    }
}
