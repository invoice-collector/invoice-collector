
import { SketchCollector } from '../../sketchCollector';

export class MissAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "miss_affiliate",
        name: "Miss Affiliate",
        description: "i18n.collectors.miss_affiliate.description",
        version: "0",
        website: "https://aff-missaffiliate.pay.tune.com/payment-orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284747.jpg",
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
        entryUrl: "https://aff-missaffiliate.pay.tune.com/payment-orders",
    }

    constructor() {
        super(MissAffiliateCollector.CONFIG);
    }
}
