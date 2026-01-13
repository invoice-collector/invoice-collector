
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSellerCentralMxCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_seller_central_mx",
        name: "Amazon Seller Central (.mx)",
        description: "i18n.collectors.amazon_seller_central_mx.description",
        version: "0",
        website: "https://sellercentral.amazon.com.mx/sellertaxinvoice/displaySellerTaxInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015111.jpg",
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
        loginUrl: "https://sellercentral.amazon.com.mx/sellertaxinvoice/displaySellerTaxInvoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonSellerCentralMxCollector.CONFIG);
    }
}
