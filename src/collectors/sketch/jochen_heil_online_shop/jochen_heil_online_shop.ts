
import { SketchCollector } from '../../sketchCollector';

export class JochenHeilOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "jochen_heil_online_shop",
        name: "Jochen Heil Online-Shop",
        description: "i18n.collectors.jochen_heil_online_shop.description",
        version: "0",
        website: "https://jh-products.jochenheil.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728425.jpg",
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
        entryUrl: "https://jh-products.jochenheil.de/account/order",
    }

    constructor() {
        super(JochenHeilOnlineShopCollector.CONFIG);
    }
}
