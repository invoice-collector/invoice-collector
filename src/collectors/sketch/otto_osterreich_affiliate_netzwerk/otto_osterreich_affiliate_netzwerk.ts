
import { SketchCollector } from '../../sketchCollector';

export class OttoOsterreichAffiliateNetzwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "otto_osterreich_affiliate_netzwerk",
        name: "OTTO Osterreich Affiliate-Netzwerk",
        description: "i18n.collectors.otto_osterreich_affiliate_netzwerk.description",
        version: "0",
        website: "https://affiliate.ottoversand.at/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84338.jpg",
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
        entryUrl: "https://affiliate.ottoversand.at/user-billings.do",
    }

    constructor() {
        super(OttoOsterreichAffiliateNetzwerkCollector.CONFIG);
    }
}
