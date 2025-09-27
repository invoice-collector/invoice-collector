
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralBeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_be",
        name: "Amazon Seller Central (.be)",
        description: "i18n.collectors.amazon_seller_central_be.description",
        version: "0",
        website: "https://sellercentral.amazon.com.be/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846245.jpg",
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
        entryUrl: "https://sellercentral.amazon.com.be/",
    }

    constructor() {
        super(AmazonSellerCentralBeCollector.CONFIG);
    }
}
