
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KarlsruherVerkehrsverbundCollector extends SketchCollector {

    static CONFIG = {
        id: "karlsruher_verkehrsverbund",
        name: "Karlsruher Verkehrsverbund",
        description: "i18n.collectors.karlsruher_verkehrsverbund.description",
        version: "0",
        website: "https://kvv.mobilesticket.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10491.jpg",
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
        loginUrl: "https://kvv.mobilesticket.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KarlsruherVerkehrsverbundCollector.CONFIG);
    }
}
