
import { SketchCollector } from '../../sketchCollector';

export class CdiscountMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "cdiscount_merchant",
        name: "CDiscount Merchant",
        description: "i18n.collectors.cdiscount_merchant.description",
        version: "0",
        website: "https://seller.cdiscount.com/finance/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106126.jpg",
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
        entryUrl: "https://seller.cdiscount.com/finance/Invoices",
    }

    constructor() {
        super(CdiscountMerchantCollector.CONFIG);
    }
}
