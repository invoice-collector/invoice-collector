
import { SketchCollector } from '../../sketchCollector';

export class AswoShopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "aswo_shop_de",
        name: "ASWO shop DE",
        description: "i18n.collectors.aswo_shop_de.description",
        version: "0",
        website: "https://shop.aswo.com/aswoShop/startPage.faces?storeId=599",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778915.jpg",
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
        entryUrl: "https://shop.aswo.com/aswoShop/startPage.faces?storeId=599",
    }

    constructor() {
        super(AswoShopDeCollector.CONFIG);
    }
}
