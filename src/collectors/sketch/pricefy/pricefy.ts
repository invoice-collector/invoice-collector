
import { SketchCollector } from '../../sketchCollector';

export class PricefyCollector extends SketchCollector {

    static CONFIG = {
        id: "pricefy",
        name: "Pricefy",
        description: "i18n.collectors.pricefy.description",
        version: "0",
        website: "https://dashboard.pricefy.io/billing/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220079.jpg",
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
        entryUrl: "https://dashboard.pricefy.io/billing/profile",
    }

    constructor() {
        super(PricefyCollector.CONFIG);
    }
}
