
import { SketchCollector } from '../../sketchCollector';

export class ShopstarCollector extends SketchCollector {

    static CONFIG = {
        id: "shopstar",
        name: "shopstar",
        description: "i18n.collectors.shopstar.description",
        version: "0",
        website: "https://www.shopstar.pe/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797140.jpg",
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
        entryUrl: "https://www.shopstar.pe/",
    }

    constructor() {
        super(ShopstarCollector.CONFIG);
    }
}
