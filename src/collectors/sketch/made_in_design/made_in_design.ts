
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MadeInDesignCollector extends SketchCollector {

    static CONFIG = {
        id: "made_in_design",
        name: "Made in design",
        description: "i18n.collectors.made_in_design.description",
        version: "0",
        website: "https://www.madeindesign.co.uk/midcustomer/account/login/referer/aHR0cHM6Ly93d3cubWFkZWluZGVzaWduLmNvLnVrL21pZGN1c3RvbWVyL2FjY291bnQvaW5kZXgv/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122260.jpg",
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
        loginUrl: "https://www.madeindesign.co.uk/midcustomer/account/login/referer/aHR0cHM6Ly93d3cubWFkZWluZGVzaWduLmNvLnVrL21pZGN1c3RvbWVyL2FjY291bnQvaW5kZXgv/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MadeInDesignCollector.CONFIG);
    }
}
