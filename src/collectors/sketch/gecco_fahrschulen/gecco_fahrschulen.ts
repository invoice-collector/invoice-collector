
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GeccoFahrschulenCollector extends SketchCollector {

    static CONFIG = {
        id: "gecco_fahrschulen",
        name: "Gecco Fahrschulen",
        description: "i18n.collectors.gecco_fahrschulen.description",
        version: "0",
        website: "https://gecco-fahrschulen.de/fahrschule/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556586.jpg",
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
        loginUrl: "https://gecco-fahrschulen.de/fahrschule/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeccoFahrschulenCollector.CONFIG);
    }
}
