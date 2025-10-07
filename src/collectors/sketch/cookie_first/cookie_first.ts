
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CookieFirstCollector extends SketchCollector {

    static CONFIG = {
        id: "cookie_first",
        name: "Cookie First",
        description: "i18n.collectors.cookie_first.description",
        version: "0",
        website: "https://app.cookiefirst.com/dashboard/profile/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211160.jpg",
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
        entryUrl: "https://app.cookiefirst.com/dashboard/profile/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CookieFirstCollector.CONFIG);
    }
}
