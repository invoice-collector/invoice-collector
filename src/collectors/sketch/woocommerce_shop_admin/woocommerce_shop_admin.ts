
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WoocommerceShopAdminCollector extends SketchCollector {

    static CONFIG = {
        id: "woocommerce_shop_admin",
        name: "WooCommerce Shop Admin",
        description: "i18n.collectors.woocommerce_shop_admin.description",
        version: "0",
        website: "http://www.woocommerce.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/844623.jpg",
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
        loginUrl: "http://www.woocommerce.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WoocommerceShopAdminCollector.CONFIG);
    }
}
