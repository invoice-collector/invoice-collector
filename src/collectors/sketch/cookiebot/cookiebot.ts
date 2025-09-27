
import { SketchCollector } from '../../sketchCollector';

export class CookiebotCollector extends SketchCollector {

    static CONFIG = {
        id: "cookiebot",
        name: "Cookiebot",
        description: "i18n.collectors.cookiebot.description",
        version: "0",
        website: "https://manage.cookiebot.com/de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72442.jpg",
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
        entryUrl: "https://manage.cookiebot.com/de/invoices",
    }

    constructor() {
        super(CookiebotCollector.CONFIG);
    }
}
