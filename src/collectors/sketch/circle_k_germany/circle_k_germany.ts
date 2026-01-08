
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CircleKGermanyCollector extends SketchCollector {

    static CONFIG = {
        id: "circle_k_germany",
        name: "Circle K - Germany",
        description: "i18n.collectors.circle_k_germany.description",
        version: "0",
        website: "https://fleet.circlek-deutschland.de/secure/clients/factures/recherche.do#anchorRecherche",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4510327.jpg",
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
        loginUrl: "https://fleet.circlek-deutschland.de/secure/clients/factures/recherche.do#anchorRecherche",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CircleKGermanyCollector.CONFIG);
    }
}
