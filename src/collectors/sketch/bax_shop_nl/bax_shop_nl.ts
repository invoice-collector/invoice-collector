
import { SketchCollector } from '../../sketchCollector';

export class BaxShopNlCollector extends SketchCollector {

    static CONFIG = {
        id: "bax_shop_nl",
        name: "Bax-shop.nl",
        description: "i18n.collectors.bax_shop_nl.description",
        version: "0",
        website: "http://www.bax-shop.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32658.jpg",
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
        entryUrl: "http://www.bax-shop.nl",
    }

    constructor() {
        super(BaxShopNlCollector.CONFIG);
    }
}
