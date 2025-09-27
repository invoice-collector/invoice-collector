
import { SketchCollector } from '../../sketchCollector';

export class WoltMerchantsCollector extends SketchCollector {

    static CONFIG = {
        id: "wolt_merchants",
        name: "Wolt Merchants",
        description: "i18n.collectors.wolt_merchants.description",
        version: "0",
        website: "https://merchant.wolt.com/login?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037314.jpg",
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
        entryUrl: "https://merchant.wolt.com/login?next=/",
    }

    constructor() {
        super(WoltMerchantsCollector.CONFIG);
    }
}
