
import { SketchCollector } from '../../sketchCollector';

export class HerweckShopCollector extends SketchCollector {

    static CONFIG = {
        id: "herweck_shop",
        name: "Herweck Shop",
        description: "i18n.collectors.herweck_shop.description",
        version: "0",
        website: "https://www.herweck.de/kundencenter/belege/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74298.jpg",
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
        entryUrl: "https://www.herweck.de/kundencenter/belege/",
    }

    constructor() {
        super(HerweckShopCollector.CONFIG);
    }
}
