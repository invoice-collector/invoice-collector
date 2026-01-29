
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelenetBeCollector extends SketchCollector {

    static CONFIG = {
        id: "telenet_be",
        name: "telenet.be",
        description: "i18n.collectors.telenet_be.description",
        version: "0",
        website: "https://www2.telenet.be/content/www-telenet-be/fr/business/klantenservice/raadpleeg-uw-saldo-en-factuur",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109840.jpg",
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
        loginUrl: "https://www2.telenet.be/content/www-telenet-be/fr/business/klantenservice/raadpleeg-uw-saldo-en-factuur",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelenetBeCollector.CONFIG);
    }
}
