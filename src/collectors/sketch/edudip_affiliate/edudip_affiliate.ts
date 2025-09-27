
import { SketchCollector } from '../../sketchCollector';

export class EdudipAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "edudip_affiliate",
        name: "Edudip-Affiliate",
        description: "i18n.collectors.edudip_affiliate.description",
        version: "0",
        website: "https://affiliate.edudip.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153611.jpg",
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
        entryUrl: "https://affiliate.edudip.com",
    }

    constructor() {
        super(EdudipAffiliateCollector.CONFIG);
    }
}
