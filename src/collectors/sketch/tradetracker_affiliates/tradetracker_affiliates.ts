
import { SketchCollector } from '../../sketchCollector';

export class TradetrackerAffiliatesCollector extends SketchCollector {

    static CONFIG = {
        id: "tradetracker_affiliates",
        name: "TradeTracker Affiliates",
        description: "i18n.collectors.tradetracker_affiliates.description",
        version: "0",
        website: "https://affiliate.tradetracker.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/113657.jpg",
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
        entryUrl: "https://affiliate.tradetracker.com/user/login",
    }

    constructor() {
        super(TradetrackerAffiliatesCollector.CONFIG);
    }
}
