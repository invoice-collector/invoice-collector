
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralNlCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_nl",
        name: "Amazon Seller Central (.nl)",
        description: "i18n.collectors.amazon_seller_central_nl.description",
        version: "0",
        website: "https://sellercentral.amazon.nl/tax/seller-fee-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/514925.jpg",
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
        loginUrl: "https://sellercentral.amazon.nl/tax/seller-fee-invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonSellerCentralNlCollector.CONFIG);
    }
}
