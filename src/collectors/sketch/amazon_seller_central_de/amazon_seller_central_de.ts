
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralDeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_de",
        name: "Amazon Seller Central (.de)",
        description: "i18n.collectors.amazon_seller_central_de.description",
        version: "0",
        website: "https://sellercentral.amazon.de/gp/payments-account/past-settlements.html/ref=ag_xx_cont_pymtvtrans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/916.jpg",
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
        entryUrl: "https://sellercentral.amazon.de/gp/payments-account/past-settlements.html/ref=ag_xx_cont_pymtvtrans",
    }

    constructor() {
        super(AmazonSellerCentralDeCollector.CONFIG);
    }
}
