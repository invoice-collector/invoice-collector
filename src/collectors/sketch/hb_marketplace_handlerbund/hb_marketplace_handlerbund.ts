
import { SketchCollector } from '../../sketchCollector';

export class HbMarketplaceHandlerbundCollector extends SketchCollector {

    static CONFIG = {
        id: "hb_marketplace_handlerbund",
        name: "HB MARKETPLACE - Handlerbund",
        description: "i18n.collectors.hb_marketplace_handlerbund.description",
        version: "0",
        website: "https://auth.hb-marketplace.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4024589.jpg",
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
        entryUrl: "https://auth.hb-marketplace.com/",
    }

    constructor() {
        super(HbMarketplaceHandlerbundCollector.CONFIG);
    }
}
