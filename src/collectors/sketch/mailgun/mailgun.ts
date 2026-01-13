
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MailgunCollector extends SketchCollector {

    static CONFIG = {
        id: "mailgun",
        name: "Mailgun",
        description: "i18n.collectors.mailgun.description",
        version: "0",
        website: "https://app.mailgun.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6716.jpg",
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
        loginUrl: "https://app.mailgun.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailgunCollector.CONFIG);
    }
}
