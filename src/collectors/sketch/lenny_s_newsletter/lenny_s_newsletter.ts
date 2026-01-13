
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LennySNewsletterCollector extends SketchCollector {

    static CONFIG = {
        id: "lenny_s_newsletter",
        name: "Lenny\'s Newsletter",
        description: "i18n.collectors.lenny_s_newsletter.description",
        version: "0",
        website: "https://www.lennysnewsletter.com/account/receipts?utm_source=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4539860.jpg",
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
        loginUrl: "https://www.lennysnewsletter.com/account/receipts?utm_source=account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LennySNewsletterCollector.CONFIG);
    }
}
