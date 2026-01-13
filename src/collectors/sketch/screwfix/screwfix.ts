
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScrewfixCollector extends SketchCollector {

    static CONFIG = {
        id: "screwfix",
        name: "Screwfix",
        description: "i18n.collectors.screwfix.description",
        version: "0",
        website: "https://www.screwfix.com/loginpage/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66106.jpg",
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
        loginUrl: "https://www.screwfix.com/loginpage/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScrewfixCollector.CONFIG);
    }
}
