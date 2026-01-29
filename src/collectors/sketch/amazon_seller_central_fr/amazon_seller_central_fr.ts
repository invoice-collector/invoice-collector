
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralFrCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_fr",
        name: "Amazon Seller Central (.fr)",
        description: "i18n.collectors.amazon_seller_central_fr.description",
        version: "0",
        website: "https://sellercentral.amazon.fr/tax/seller-fee-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863263.jpg",
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
        loginUrl: "https://sellercentral.amazon.fr/tax/seller-fee-invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonSellerCentralFrCollector.CONFIG);
    }
}
