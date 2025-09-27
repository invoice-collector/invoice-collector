
import { SketchCollector } from '../../sketchCollector';

export class PostAffiliateProCollector extends SketchCollector {

    static CONFIG = {
        id: "post_affiliate_pro",
        name: "Post Affiliate Pro",
        description: "i18n.collectors.post_affiliate_pro.description",
        version: "0",
        website: "http://www.postaffiliatepro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8765.jpg",
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
        entryUrl: "http://www.postaffiliatepro.com",
    }

    constructor() {
        super(PostAffiliateProCollector.CONFIG);
    }
}
