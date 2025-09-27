
import { SketchCollector } from '../../sketchCollector';

export class BrevoCollector extends SketchCollector {

    static CONFIG = {
        id: "brevo",
        name: "Brevo",
        description: "i18n.collectors.brevo.description",
        version: "0",
        website: "https://app.brevo.com/billing/account/plans/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2201657.jpg",
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
        entryUrl: "https://app.brevo.com/billing/account/plans/billing-history",
    }

    constructor() {
        super(BrevoCollector.CONFIG);
    }
}
