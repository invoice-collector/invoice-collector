
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PliegerNlCollector extends SketchCollector {

    static CONFIG = {
        id: "plieger_nl",
        name: "Plieger.nl",
        description: "i18n.collectors.plieger_nl.description",
        version: "0",
        website: "https://web.plieger.nl/B2B/PAGE_Start/xEMAAO1FevNLU3lMaHlOQXJCjwE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32531.jpg",
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
        loginUrl: "https://web.plieger.nl/B2B/PAGE_Start/xEMAAO1FevNLU3lMaHlOQXJCjwE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PliegerNlCollector.CONFIG);
    }
}
