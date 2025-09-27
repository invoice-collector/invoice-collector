
import { SketchCollector } from '../../sketchCollector';

export class CookieScriptCollector extends SketchCollector {

    static CONFIG = {
        id: "cookie_script",
        name: "Cookie Script",
        description: "i18n.collectors.cookie_script.description",
        version: "0",
        website: "https://cookie-script.com/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526328.jpg",
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
        entryUrl: "https://cookie-script.com/subscriptions",
    }

    constructor() {
        super(CookieScriptCollector.CONFIG);
    }
}
