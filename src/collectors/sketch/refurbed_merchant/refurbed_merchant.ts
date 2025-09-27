
import { SketchCollector } from '../../sketchCollector';

export class RefurbedMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "refurbed_merchant",
        name: "Refurbed - Merchant",
        description: "i18n.collectors.refurbed_merchant.description",
        version: "0",
        website: "https://merchant.refurbed.com/sales/sales-payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4543296.jpg",
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
        entryUrl: "https://merchant.refurbed.com/sales/sales-payouts",
    }

    constructor() {
        super(RefurbedMerchantCollector.CONFIG);
    }
}
