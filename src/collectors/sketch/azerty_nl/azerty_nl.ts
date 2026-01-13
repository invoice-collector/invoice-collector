
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AzertyNlCollector extends SketchCollector {

    static CONFIG = {
        id: "azerty_nl",
        name: "Azerty.nl",
        description: "i18n.collectors.azerty_nl.description",
        version: "0",
        website: "https://azerty.nl/aanmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31408.jpg",
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
        loginUrl: "https://azerty.nl/aanmelden",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AzertyNlCollector.CONFIG);
    }
}
