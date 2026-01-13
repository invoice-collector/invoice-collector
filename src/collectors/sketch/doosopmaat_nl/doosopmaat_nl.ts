
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DoosopmaatNlCollector extends SketchCollector {

    static CONFIG = {
        id: "doosopmaat_nl",
        name: "doosopmaat.nl",
        description: "i18n.collectors.doosopmaat_nl.description",
        version: "0",
        website: "https://www.doosopmaat.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32649.jpg",
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
        loginUrl: "https://www.doosopmaat.nl/inloggen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoosopmaatNlCollector.CONFIG);
    }
}
