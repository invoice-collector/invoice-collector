
import { SketchCollector } from '../../sketchCollector';

export class EbayKleinanzeigenCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_kleinanzeigen",
        name: "ebay Kleinanzeigen",
        description: "i18n.collectors.ebay_kleinanzeigen.description",
        version: "0",
        website: "https://www.ebay-kleinanzeigen.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10968.jpg",
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
        entryUrl: "https://www.ebay-kleinanzeigen.de",
    }

    constructor() {
        super(EbayKleinanzeigenCollector.CONFIG);
    }
}
