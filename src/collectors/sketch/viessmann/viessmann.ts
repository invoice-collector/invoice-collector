
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ViessmannCollector extends SketchCollector {

    static CONFIG = {
        id: "viessmann",
        name: "Viessmann",
        description: "i18n.collectors.viessmann.description",
        version: "0",
        website: "https://www.viessmann.de/#Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31602.jpg",
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
        loginUrl: "https://www.viessmann.de/#Login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ViessmannCollector.CONFIG);
    }
}
