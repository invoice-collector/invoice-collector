
import { SketchCollector } from '../../sketchCollector';

export class SellerlegendCollector extends SketchCollector {

    static CONFIG = {
        id: "sellerlegend",
        name: "Sellerlegend",
        description: "i18n.collectors.sellerlegend.description",
        version: "0",
        website: "https://app.sellerlegend.com/payment/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135935.jpg",
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
        entryUrl: "https://app.sellerlegend.com/payment/index",
    }

    constructor() {
        super(SellerlegendCollector.CONFIG);
    }
}
