
import { SketchCollector } from '../../sketchCollector';

export class WebpagetestCollector extends SketchCollector {

    static CONFIG = {
        id: "webpagetest",
        name: "WebPageTest",
        description: "i18n.collectors.webpagetest.description",
        version: "0",
        website: "https://iowpt.catchpoint.com/auth/WptAccount/Login?ReturnUrl=https://www.webpagetest.org/cpauth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083200.jpg",
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
        entryUrl: "https://iowpt.catchpoint.com/auth/WptAccount/Login?ReturnUrl=https://www.webpagetest.org/cpauth",
    }

    constructor() {
        super(WebpagetestCollector.CONFIG);
    }
}
