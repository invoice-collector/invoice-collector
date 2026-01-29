
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CloudsmithCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudsmith",
        name: "Cloudsmith",
        description: "i18n.collectors.cloudsmith.description",
        version: "0",
        website: "https://cloudsmith.com/signup/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121177.jpg",
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
        loginUrl: "https://cloudsmith.com/signup/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CloudsmithCollector.CONFIG);
    }
}
