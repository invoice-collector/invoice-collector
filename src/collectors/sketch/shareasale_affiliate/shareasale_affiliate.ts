
import { SketchCollector } from '../../sketchCollector';

export class ShareasaleAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "shareasale_affiliate",
        name: "ShareASale - Affiliate",
        description: "i18n.collectors.shareasale_affiliate.description",
        version: "0",
        website: "https://account.shareasale.com/a-revenuereport.cfm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9589.jpg",
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
        entryUrl: "https://account.shareasale.com/a-revenuereport.cfm",
    }

    constructor() {
        super(ShareasaleAffiliateCollector.CONFIG);
    }
}
