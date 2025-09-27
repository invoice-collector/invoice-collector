
import { SketchCollector } from '../../sketchCollector';

export class MerchantOnlinePortalTelecashDeCollector extends SketchCollector {

    static CONFIG = {
        id: "merchant_online_portal_telecash_de",
        name: "Merchant Online Portal(telecash.de)",
        description: "i18n.collectors.merchant_online_portal_telecash_de.description",
        version: "0",
        website: "https://mop.telecash.de/mop/faces/pages/main/tc/main.xhtml?acquirer=tc&language=de&styleFor=tc#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203808.jpg",
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
        entryUrl: "https://mop.telecash.de/mop/faces/pages/main/tc/main.xhtml?acquirer=tc&language=de&styleFor=tc#",
    }

    constructor() {
        super(MerchantOnlinePortalTelecashDeCollector.CONFIG);
    }
}
