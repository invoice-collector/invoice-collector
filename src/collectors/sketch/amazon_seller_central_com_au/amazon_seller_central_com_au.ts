
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralComAuCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_com_au",
        name: "Amazon Seller Central (.com.au)",
        description: "i18n.collectors.amazon_seller_central_com_au.description",
        version: "0",
        website: "https://sellercentral.amazon.com.au/tax/seller-fee-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/514920.jpg",
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
        entryUrl: "https://sellercentral.amazon.com.au/tax/seller-fee-invoices",
    }

    constructor() {
        super(AmazonSellerCentralComAuCollector.CONFIG);
    }
}
