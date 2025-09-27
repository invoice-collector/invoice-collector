
import { SketchCollector } from '../../sketchCollector';

export class SocialmediamarketCollector extends SketchCollector {

    static CONFIG = {
        id: "socialmediamarket",
        name: "SocialMediaMarket",
        description: "i18n.collectors.socialmediamarket.description",
        version: "0",
        website: "https://www.socialmediamarket.de/mein-konto/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135362.jpg",
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
        entryUrl: "https://www.socialmediamarket.de/mein-konto/orders/",
    }

    constructor() {
        super(SocialmediamarketCollector.CONFIG);
    }
}
