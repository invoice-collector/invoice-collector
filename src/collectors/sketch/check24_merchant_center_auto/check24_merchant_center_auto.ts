
import { SketchCollector } from '../../sketchCollector';

export class Check24MerchantCenterAutoCollector extends SketchCollector {

    static CONFIG = {
        id: "check24_merchant_center_auto",
        name: "Check24 Merchant Center Auto",
        description: "i18n.collectors.check24_merchant_center_auto.description",
        version: "0",
        website: "https://merchant-center.auto.check24.de/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4617210.jpg",
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
        entryUrl: "https://merchant-center.auto.check24.de/account/",
    }

    constructor() {
        super(Check24MerchantCenterAutoCollector.CONFIG);
    }
}
