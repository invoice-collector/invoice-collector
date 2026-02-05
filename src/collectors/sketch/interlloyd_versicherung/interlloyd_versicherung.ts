
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterlloydVersicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "interlloyd_versicherung",
        name: "Interlloyd Versicherung",
        description: "i18n.collectors.interlloyd_versicherung.description",
        version: "0",
        website: "https://meine.interlloyd.de/services/postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2075457.jpg",
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
        loginUrl: "https://meine.interlloyd.de/services/postfach",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InterlloydVersicherungCollector.CONFIG);
    }
}
