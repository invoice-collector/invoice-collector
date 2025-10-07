
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FedexBillingOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex_billing_online",
        name: "Fedex Billing Online",
        description: "i18n.collectors.fedex_billing_online.description",
        version: "0",
        website: "https://www.fedex.com/en-us/billing-online.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137156.jpg",
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
        entryUrl: "https://www.fedex.com/en-us/billing-online.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FedexBillingOnlineCollector.CONFIG);
    }
}
