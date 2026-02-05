
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MygetCollector extends SketchCollector {

    static CONFIG = {
        id: "myget",
        name: "MyGet",
        description: "i18n.collectors.myget.description",
        version: "0",
        website: "https://www.myget.org/Account/Login?ReturnUrl=%2fprofile%2fMe#!/Subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20962.jpg",
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
        loginUrl: "https://www.myget.org/Account/Login?ReturnUrl=%2fprofile%2fMe#!/Subscription",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MygetCollector.CONFIG);
    }
}
