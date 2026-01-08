
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VersioCollector extends SketchCollector {

    static CONFIG = {
        id: "versio",
        name: "Versio",
        description: "i18n.collectors.versio.description",
        version: "0",
        website: "https://www.versio.nl/login?uri=/customer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9542.jpg",
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
        loginUrl: "https://www.versio.nl/login?uri=/customer/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VersioCollector.CONFIG);
    }
}
