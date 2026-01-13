
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EngieNlCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_nl",
        name: "ENGIE.nl",
        description: "i18n.collectors.engie_nl.description",
        version: "0",
        website: "https://mijn.engie.nl/betalingen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2451899.jpg",
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
        loginUrl: "https://mijn.engie.nl/betalingen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EngieNlCollector.CONFIG);
    }
}
