
import { SketchCollector } from '../../sketchCollector';

export class AmazonSellerCentralEuCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_eu",
        name: "Amazon Seller Central (.eu)",
        description: "i18n.collectors.amazon_seller_central_eu.description",
        version: "0",
        website: "https://sellercentral-europe.amazon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156697.jpg",
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
        entryUrl: "https://sellercentral-europe.amazon.com",
    }

    constructor() {
        super(AmazonSellerCentralEuCollector.CONFIG);
    }
}
