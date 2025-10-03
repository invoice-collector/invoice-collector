
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MemberspotAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "memberspot_affiliate",
        name: "Memberspot Affiliate",
        description: "i18n.collectors.memberspot_affiliate.description",
        version: "0",
        website: "https://partner.memberspot.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2141147.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://partner.memberspot.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MemberspotAffiliateCollector.CONFIG);
    }
}
