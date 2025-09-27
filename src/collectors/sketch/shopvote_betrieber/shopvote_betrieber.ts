
import { SketchCollector } from '../../sketchCollector';

export class ShopvoteBetrieberCollector extends SketchCollector {

    static CONFIG = {
        id: "shopvote_betrieber",
        name: "Shopvote - Betrieber",
        description: "i18n.collectors.shopvote_betrieber.description",
        version: "0",
        website: "https://www.shopvote.de/betreiber/index.php?site=invoice&shopid=22901",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3312246.jpg",
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
        entryUrl: "https://www.shopvote.de/betreiber/index.php?site=invoice&shopid=22901",
    }

    constructor() {
        super(ShopvoteBetrieberCollector.CONFIG);
    }
}
