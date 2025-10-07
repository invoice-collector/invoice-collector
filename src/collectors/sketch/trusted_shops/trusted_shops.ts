
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrustedShopsCollector extends SketchCollector {

    static CONFIG = {
        id: "trusted_shops",
        name: "Trusted Shops",
        description: "i18n.collectors.trusted_shops.description",
        version: "0",
        website: "https://www.trustedshops.com/de/shop/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8195.jpg",
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
        entryUrl: "https://www.trustedshops.com/de/shop/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrustedShopsCollector.CONFIG);
    }
}
