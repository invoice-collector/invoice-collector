
import { SketchCollector } from '../../sketchCollector';

export class CookiehubCollector extends SketchCollector {

    static CONFIG = {
        id: "cookiehub",
        name: "CookieHub",
        description: "i18n.collectors.cookiehub.description",
        version: "0",
        website: "https://dash.cookiehub.com/billing/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779624.jpg",
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
        entryUrl: "https://dash.cookiehub.com/billing/invoice",
    }

    constructor() {
        super(CookiehubCollector.CONFIG);
    }
}
