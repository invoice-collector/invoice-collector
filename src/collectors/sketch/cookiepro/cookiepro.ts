
import { SketchCollector } from '../../sketchCollector';

export class CookieproCollector extends SketchCollector {

    static CONFIG = {
        id: "cookiepro",
        name: "Cookiepro",
        description: "i18n.collectors.cookiepro.description",
        version: "0",
        website: "https://app.cookiepro.com/settings/general/billing-and-subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1545178.jpg",
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
        entryUrl: "https://app.cookiepro.com/settings/general/billing-and-subscriptions",
    }

    constructor() {
        super(CookieproCollector.CONFIG);
    }
}
