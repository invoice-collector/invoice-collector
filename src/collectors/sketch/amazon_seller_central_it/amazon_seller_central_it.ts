
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralItCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_it",
        name: "amazon seller central (.it)",
        description: "i18n.collectors.amazon_seller_central_it.description",
        version: "0",
        website: "https://sellercentral.amazon.it/tax/seller-fee-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2225195.jpg",
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
        entryUrl: "https://sellercentral.amazon.it/tax/seller-fee-invoices",
    }

    constructor() {
        super(AmazonSellerCentralItCollector.CONFIG);
    }
}
