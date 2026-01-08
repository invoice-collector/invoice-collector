
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralEsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_es",
        name: "Amazon Seller Central (.es)",
        description: "i18n.collectors.amazon_seller_central_es.description",
        version: "0",
        website: "https://sellercentral.amazon.es/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/527633.jpg",
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
        loginUrl: "https://sellercentral.amazon.es/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonSellerCentralEsCollector.CONFIG);
    }
}
