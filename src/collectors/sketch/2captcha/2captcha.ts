
import { SketchCollector } from '../../sketchCollector';

export class _2captchaCollector extends SketchCollector {

    static CONFIG = {
        id: "2captcha",
        name: "2Captcha",
        description: "i18n.collectors.2captcha.description",
        version: "0",
        website: "https://2captcha.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131277.jpg",
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
        entryUrl: "https://2captcha.com/",
    }

    constructor() {
        super(_2captchaCollector.CONFIG);
    }
}
