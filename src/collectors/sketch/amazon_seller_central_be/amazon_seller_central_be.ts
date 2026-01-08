
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralBeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_be",
        name: "Amazon Seller Central (.be)",
        description: "i18n.collectors.amazon_seller_central_be.description",
        version: "0",
        website: "https://sellercentral.amazon.com.be/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846245.jpg",
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
        loginUrl: "https://sellercentral.amazon.com.be/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonSellerCentralBeCollector.CONFIG);
    }
}
