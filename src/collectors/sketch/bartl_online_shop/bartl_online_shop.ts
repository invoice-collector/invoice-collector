
import { SketchCollector } from '../../sketchCollector';

export class BartlOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "bartl_online_shop",
        name: "Bartl Online Shop",
        description: "i18n.collectors.bartl_online_shop.description",
        version: "0",
        website: "https://b2b.bartlshop.de/de/account/?action=document_archive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728426.jpg",
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
        entryUrl: "https://b2b.bartlshop.de/de/account/?action=document_archive",
    }

    constructor() {
        super(BartlOnlineShopCollector.CONFIG);
    }
}
