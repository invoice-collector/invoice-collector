
import { SketchCollector } from '../../sketchCollector';

export class StripeCollector extends SketchCollector {

    static CONFIG = {
        id: "stripe",
        name: "Stripe",
        description: "i18n.collectors.stripe.description",
        version: "0",
        website: "https://dashboard.stripe.com/account/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6459.jpg",
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
        entryUrl: "https://dashboard.stripe.com/account/documents",
    }

    constructor() {
        super(StripeCollector.CONFIG);
    }
}
