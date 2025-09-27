
import { SketchCollector } from '../../sketchCollector';

export class RyteAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "ryte_affiliate",
        name: "ryte - Affiliate",
        description: "i18n.collectors.ryte_affiliate.description",
        version: "0",
        website: "https://affiliate.ryte.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/5322.jpg",
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
        entryUrl: "https://affiliate.ryte.com/billing",
    }

    constructor() {
        super(RyteAffiliateCollector.CONFIG);
    }
}
