
import { SketchCollector } from '../../sketchCollector';

export class EbayComAuCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_com_au",
        name: "Ebay.com.au",
        description: "i18n.collectors.ebay_com_au.description",
        version: "0",
        website: "https://www.ebay.com.au/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747281.jpg",
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
        entryUrl: "https://www.ebay.com.au/",
    }

    constructor() {
        super(EbayComAuCollector.CONFIG);
    }
}
