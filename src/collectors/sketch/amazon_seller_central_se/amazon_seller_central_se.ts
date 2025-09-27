
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralSeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_se",
        name: "Amazon Seller Central (.se)",
        description: "i18n.collectors.amazon_seller_central_se.description",
        version: "0",
        website: "https://sellercentral.amazon.se/payments/event/view?resultsPerPage=10&pageNumber=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842035.jpg",
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
        entryUrl: "https://sellercentral.amazon.se/payments/event/view?resultsPerPage=10&pageNumber=1",
    }

    constructor() {
        super(AmazonSellerCentralSeCollector.CONFIG);
    }
}
