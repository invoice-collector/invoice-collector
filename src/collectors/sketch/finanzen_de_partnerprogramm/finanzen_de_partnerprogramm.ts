
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FinanzenDePartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "finanzen_de_partnerprogramm",
        name: "finanzen.de Partnerprogramm",
        description: "i18n.collectors.finanzen_de_partnerprogramm.description",
        version: "0",
        website: "https://www.finanzen.de/partner/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7941.jpg",
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
        loginUrl: "https://www.finanzen.de/partner/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FinanzenDePartnerprogrammCollector.CONFIG);
    }
}
