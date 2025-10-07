
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralComCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_com",
        name: "Amazon Seller Central (.com)",
        description: "i18n.collectors.amazon_seller_central_com.description",
        version: "0",
        website: "https://sellercentral.amazon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116294.jpg",
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
        entryUrl: "https://sellercentral.amazon.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonSellerCentralComCollector.CONFIG);
    }
}
