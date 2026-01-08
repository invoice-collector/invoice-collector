
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StampinUpDemonstratorLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "stampin_up_demonstrator_login",
        name: "Stampin\' Up! Demonstrator-Login",
        description: "i18n.collectors.stampin_up_demonstrator_login.description",
        version: "0",
        website: "https://my.stampinup.com/portal/de-de/account/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24478.jpg",
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
        loginUrl: "https://my.stampinup.com/portal/de-de/account/sign-in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StampinUpDemonstratorLoginCollector.CONFIG);
    }
}
