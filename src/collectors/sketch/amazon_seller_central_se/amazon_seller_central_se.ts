
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralSeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_se",
        name: "Amazon Seller Central (.se)",
        description: "i18n.collectors.amazon_seller_central_se.description",
        version: "0",
        website: "https://sellercentral.amazon.se/payments/event/view?resultsPerPage=10&pageNumber=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842035.jpg",
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
        loginUrl: "https://sellercentral.amazon.se/payments/event/view?resultsPerPage=10&pageNumber=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonSellerCentralSeCollector.CONFIG);
    }
}
