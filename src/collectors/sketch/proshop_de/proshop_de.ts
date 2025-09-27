
import { SketchCollector } from '../../sketchCollector';

export class ProshopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "proshop_de",
        name: "ProShop.de",
        description: "i18n.collectors.proshop_de.description",
        version: "0",
        website: "https://www.proshop.de/CustomerCenter/Account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8931.jpg",
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
        entryUrl: "https://www.proshop.de/CustomerCenter/Account",
    }

    constructor() {
        super(ProshopDeCollector.CONFIG);
    }
}
