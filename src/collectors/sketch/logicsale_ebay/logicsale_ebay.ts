
import { SketchCollector } from '../../sketchCollector';

export class LogicsaleEbayCollector extends SketchCollector {

    static CONFIG = {
        id: "logicsale_ebay",
        name: "logicsale - eBay",
        description: "i18n.collectors.logicsale_ebay.description",
        version: "0",
        website: "https://ebay.logicsale.com/index.php?action=mydata",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78581.jpg",
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
        entryUrl: "https://ebay.logicsale.com/index.php?action=mydata",
    }

    constructor() {
        super(LogicsaleEbayCollector.CONFIG);
    }
}
