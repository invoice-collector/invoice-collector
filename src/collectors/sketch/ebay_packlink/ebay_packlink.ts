
import { SketchCollector } from '../../sketchCollector';

export class EbayPacklinkCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_packlink",
        name: "ebay Packlink",
        description: "i18n.collectors.ebay_packlink.description",
        version: "0",
        website: "https://ebay-versand.ebay.de/private/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396101.jpg",
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
        entryUrl: "https://ebay-versand.ebay.de/private/settings/billing/invoices",
    }

    constructor() {
        super(EbayPacklinkCollector.CONFIG);
    }
}
