
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JeevesCollector extends SketchCollector {

    static CONFIG = {
        id: "jeeves",
        name: "Jeeves",
        description: "i18n.collectors.jeeves.description",
        version: "0",
        website: "https://prod.jeev.es/client/statement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1321603.jpg",
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
        loginUrl: "https://prod.jeev.es/client/statement",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JeevesCollector.CONFIG);
    }
}
