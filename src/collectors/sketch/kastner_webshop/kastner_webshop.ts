
import { SketchCollector } from '../../sketchCollector';

export class KastnerWebshopCollector extends SketchCollector {

    static CONFIG = {
        id: "kastner_webshop",
        name: "Kastner WebShop",
        description: "i18n.collectors.kastner_webshop.description",
        version: "0",
        website: "https://shop.kastner.at/receipts/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417222.jpg",
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
        entryUrl: "https://shop.kastner.at/receipts/",
    }

    constructor() {
        super(KastnerWebshopCollector.CONFIG);
    }
}
