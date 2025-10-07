
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CrossfitAffiliatePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "crossfit_affiliate_portal",
        name: "CrossFit Affiliate Portal",
        description: "i18n.collectors.crossfit_affiliate_portal.description",
        version: "0",
        website: "https://www.crossfit.com/affiliate-portal/accounts/c1876789accf94fd8c82/payment-center",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389831.jpg",
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
        entryUrl: "https://www.crossfit.com/affiliate-portal/accounts/c1876789accf94fd8c82/payment-center",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrossfitAffiliatePortalCollector.CONFIG);
    }
}
