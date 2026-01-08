
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PutzperleDeCollector extends SketchCollector {

    static CONFIG = {
        id: "putzperle_de",
        name: "Putzperle.de",
        description: "i18n.collectors.putzperle_de.description",
        version: "0",
        website: "https://putzperle.de/de/membership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985624.jpg",
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
        loginUrl: "https://putzperle.de/de/membership",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PutzperleDeCollector.CONFIG);
    }
}
