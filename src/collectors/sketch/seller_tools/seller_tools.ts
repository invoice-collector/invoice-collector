
import { SketchCollector } from '../../sketchCollector';

export class SellerToolsCollector extends SketchCollector {

    static CONFIG = {
        id: "seller_tools",
        name: "Seller.Tools",
        description: "i18n.collectors.seller_tools.description",
        version: "0",
        website: "https://app.seller.tools/en/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241841.jpg",
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
        entryUrl: "https://app.seller.tools/en/billing",
    }

    constructor() {
        super(SellerToolsCollector.CONFIG);
    }
}
