
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FrontifyCollector extends SketchCollector {

    static CONFIG = {
        id: "frontify",
        name: "Frontify",
        description: "i18n.collectors.frontify.description",
        version: "0",
        website: "https://app.frontify.com/auth/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202979.jpg",
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
        loginUrl: "https://app.frontify.com/auth/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrontifyCollector.CONFIG);
    }
}
