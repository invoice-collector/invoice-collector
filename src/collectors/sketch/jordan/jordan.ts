
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JordanCollector extends SketchCollector {

    static CONFIG = {
        id: "jordan",
        name: "Jordan",
        description: "i18n.collectors.jordan.description",
        version: "0",
        website: "https://www.jordan-kassel.de/unternehmen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426741.jpg",
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
        loginUrl: "https://www.jordan-kassel.de/unternehmen.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JordanCollector.CONFIG);
    }
}
