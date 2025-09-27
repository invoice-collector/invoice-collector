
import { SketchCollector } from '../../sketchCollector';

export class PrivateSportShopCollector extends SketchCollector {

    static CONFIG = {
        id: "private_sport_shop",
        name: "Private Sport Shop",
        description: "i18n.collectors.private_sport_shop.description",
        version: "0",
        website: "https://www.privatesportshop.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122814.jpg",
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
        entryUrl: "https://www.privatesportshop.fr/",
    }

    constructor() {
        super(PrivateSportShopCollector.CONFIG);
    }
}
