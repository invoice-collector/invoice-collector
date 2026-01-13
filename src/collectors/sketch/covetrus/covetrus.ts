
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CovetrusCollector extends SketchCollector {

    static CONFIG = {
        id: "covetrus",
        name: "Covetrus",
        description: "i18n.collectors.covetrus.description",
        version: "0",
        website: "https://covetrus.de/i/konto/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/414364.jpg",
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
        loginUrl: "https://covetrus.de/i/konto/start",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CovetrusCollector.CONFIG);
    }
}
