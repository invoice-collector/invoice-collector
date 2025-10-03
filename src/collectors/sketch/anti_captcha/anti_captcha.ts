
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AntiCaptchaCollector extends SketchCollector {

    static CONFIG = {
        id: "anti_captcha",
        name: "Anti Captcha",
        description: "i18n.collectors.anti_captcha.description",
        version: "0",
        website: "https://anti-captcha.com/clients/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729766.jpg",
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
        entryUrl: "https://anti-captcha.com/clients/finance/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AntiCaptchaCollector.CONFIG);
    }
}
