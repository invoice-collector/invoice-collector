
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MailerliteClassicCollector extends SketchCollector {

    static CONFIG = {
        id: "mailerlite_classic",
        name: "MailerLite Classic",
        description: "i18n.collectors.mailerlite_classic.description",
        version: "0",
        website: "https://app.mailerlite.com/billing/my",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64937.jpg",
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
        loginUrl: "https://app.mailerlite.com/billing/my",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MailerliteClassicCollector.CONFIG);
    }
}
