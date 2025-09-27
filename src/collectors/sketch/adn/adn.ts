
import { SketchCollector } from '../../sketchCollector';

export class AdnCollector extends SketchCollector {

    static CONFIG = {
        id: "adn",
        name: "ADN",
        description: "i18n.collectors.adn.description",
        version: "0",
        website: "https://shop.adn.de/index.php?cl=account_order&lang=0&cl=account_order&lang=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40754.jpg",
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
        entryUrl: "https://shop.adn.de/index.php?cl=account_order&lang=0&cl=account_order&lang=0",
    }

    constructor() {
        super(AdnCollector.CONFIG);
    }
}
