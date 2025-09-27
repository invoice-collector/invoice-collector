
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_co_uk",
        name: "Amazon Seller Central (.co.uk)",
        description: "i18n.collectors.amazon_seller_central_co_uk.description",
        version: "0",
        website: "https://sellercentral.amazon.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860631.jpg",
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
        entryUrl: "https://sellercentral.amazon.co.uk/",
    }

    constructor() {
        super(AmazonSellerCentralCoUkCollector.CONFIG);
    }
}
