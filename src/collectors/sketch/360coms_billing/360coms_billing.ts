
import { SketchCollector } from '../../sketchCollector';

export class _360comsBillingCollector extends SketchCollector {

    static CONFIG = {
        id: "360coms_billing",
        name: "360coms - Billing",
        description: "i18n.collectors.360coms_billing.description",
        version: "0",
        website: "https://360coms.enlighten-online.net/EnlightenInvoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4582907.jpg",
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
        entryUrl: "https://360coms.enlighten-online.net/EnlightenInvoice",
    }

    constructor() {
        super(_360comsBillingCollector.CONFIG);
    }
}
