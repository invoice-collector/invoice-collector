
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MailercheckCollector extends SketchCollector {

    static CONFIG = {
        id: "mailercheck",
        name: "mailercheck",
        description: "i18n.collectors.mailercheck.description",
        version: "0",
        website: "https://app.mailercheck.com/login?_ga=2.139472629.730230997.1635224339-1189516071.1635224339",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/975351.jpg",
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
        loginUrl: "https://app.mailercheck.com/login?_ga=2.139472629.730230997.1635224339-1189516071.1635224339",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MailercheckCollector.CONFIG);
    }
}
