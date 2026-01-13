
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeroltCollector extends SketchCollector {

    static CONFIG = {
        id: "merolt",
        name: "merolt",
        description: "i18n.collectors.merolt.description",
        version: "0",
        website: "https://www.merolt.de/my-account-2/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27383.jpg",
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
        loginUrl: "https://www.merolt.de/my-account-2/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeroltCollector.CONFIG);
    }
}
