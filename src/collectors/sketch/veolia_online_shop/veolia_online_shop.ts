
import { SketchCollector } from '../../sketchCollector';

export class VeoliaOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_online_shop",
        name: "Veolia Online-Shop",
        description: "i18n.collectors.veolia_online_shop.description",
        version: "0",
        website: "https://shop.veolia.de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216961.jpg",
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
        entryUrl: "https://shop.veolia.de/account/invoices",
    }

    constructor() {
        super(VeoliaOnlineShopCollector.CONFIG);
    }
}
