
import { SketchCollector } from '../../sketchCollector';

export class BrdyResellerCollector extends SketchCollector {

    static CONFIG = {
        id: "brdy_reseller",
        name: "Brdy - Reseller",
        description: "i18n.collectors.brdy_reseller.description",
        version: "0",
        website: "https://corporate.brdysupport.com/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693248.jpg",
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
        entryUrl: "https://corporate.brdysupport.com/billing/history",
    }

    constructor() {
        super(BrdyResellerCollector.CONFIG);
    }
}
