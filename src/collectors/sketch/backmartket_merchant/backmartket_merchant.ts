
import { SketchCollector } from '../../sketchCollector';

export class BackmartketMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "backmartket_merchant",
        name: "BackMartket Merchant",
        description: "i18n.collectors.backmartket_merchant.description",
        version: "0",
        website: "https://www.backmarket.de/bo_merchant/invoices/past-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120075.jpg",
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
        entryUrl: "https://www.backmarket.de/bo_merchant/invoices/past-invoices",
    }

    constructor() {
        super(BackmartketMerchantCollector.CONFIG);
    }
}
