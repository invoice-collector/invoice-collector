
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RakutenMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "rakuten_merchant",
        name: "Rakuten - Merchant",
        description: "i18n.collectors.rakuten_merchant.description",
        version: "0",
        website: "https://merchants.rakuten.de/office/invoice/payout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3132.jpg",
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
        entryUrl: "https://merchants.rakuten.de/office/invoice/payout",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RakutenMerchantCollector.CONFIG);
    }
}
