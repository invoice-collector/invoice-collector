
import { SketchCollector } from '../../sketchCollector';

export class GsmShopNlCollector extends SketchCollector {

    static CONFIG = {
        id: "gsm_shop_nl",
        name: "GSM-Shop.nl",
        description: "i18n.collectors.gsm_shop_nl.description",
        version: "0",
        website: "http://www.gsm-shop.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9579.jpg",
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
        entryUrl: "http://www.gsm-shop.nl/login",
    }

    constructor() {
        super(GsmShopNlCollector.CONFIG);
    }
}
