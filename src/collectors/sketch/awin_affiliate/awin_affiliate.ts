
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AwinAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "awin_affiliate",
        name: "Awin - Affiliate",
        description: "i18n.collectors.awin_affiliate.description",
        version: "0",
        website: "https://ui.awin.com/awin/affiliate/392069/payments/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194684.jpg",
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
        entryUrl: "https://ui.awin.com/awin/affiliate/392069/payments/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AwinAffiliateCollector.CONFIG);
    }
}
