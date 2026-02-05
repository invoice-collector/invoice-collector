
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShopifyPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "shopify_partner",
        name: "Shopify Partner",
        description: "i18n.collectors.shopify_partner.description",
        version: "0",
        website: "https://www.shopify.com/partners?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1291018.jpg",
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
        loginUrl: "https://www.shopify.com/partners?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ShopifyPartnerCollector.CONFIG);
    }
}
