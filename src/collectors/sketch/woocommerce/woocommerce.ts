
import { SketchCollector } from '../../sketchCollector';

export class WoocommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "woocommerce",
        name: "WooCommerce",
        description: "i18n.collectors.woocommerce.description",
        version: "0",
        website: "https://woocommerce.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15308.jpg",
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
        entryUrl: "https://woocommerce.com/my-account/",
    }

    constructor() {
        super(WoocommerceCollector.CONFIG);
    }
}
