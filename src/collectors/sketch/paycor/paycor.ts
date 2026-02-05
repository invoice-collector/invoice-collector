
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaycorCollector extends SketchCollector {

    static CONFIG = {
        id: "paycor",
        name: "Paycor",
        description: "i18n.collectors.paycor.description",
        version: "0",
        website: "https://secure.paycor.com/Accounts/Authentication/Signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8996.jpg",
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
        loginUrl: "https://secure.paycor.com/Accounts/Authentication/Signin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PaycorCollector.CONFIG);
    }
}
