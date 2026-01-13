
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TwagoCollector extends SketchCollector {

    static CONFIG = {
        id: "twago",
        name: "Twago",
        description: "i18n.collectors.twago.description",
        version: "0",
        website: "https://www.twago.de/authenticate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/320.jpg",
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
        loginUrl: "https://www.twago.de/authenticate",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TwagoCollector.CONFIG);
    }
}
