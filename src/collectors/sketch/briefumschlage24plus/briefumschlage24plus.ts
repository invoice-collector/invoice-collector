
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Briefumschlage24plusCollector extends SketchCollector {

    static CONFIG = {
        id: "briefumschlage24plus",
        name: "Briefumschlage24PLUS",
        description: "i18n.collectors.briefumschlage24plus.description",
        version: "0",
        website: "https://www.briefumschlaege24plus.de/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440665.jpg",
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
        loginUrl: "https://www.briefumschlaege24plus.de/download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Briefumschlage24plusCollector.CONFIG);
    }
}
