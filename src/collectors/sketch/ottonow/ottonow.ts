
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OttonowCollector extends SketchCollector {

    static CONFIG = {
        id: "ottonow",
        name: "Ottonow",
        description: "i18n.collectors.ottonow.description",
        version: "0",
        website: "https://ottonow.de/konto/vertraege/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230796.jpg",
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
        loginUrl: "https://ottonow.de/konto/vertraege/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OttonowCollector.CONFIG);
    }
}
