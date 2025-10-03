
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShareasaleMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "shareasale_merchant",
        name: "ShareASale - Merchant",
        description: "i18n.collectors.shareasale_merchant.description",
        version: "0",
        website: "https://account.shareasale.com/a-login.cfm?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79442.jpg",
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
        entryUrl: "https://account.shareasale.com/a-login.cfm?",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShareasaleMerchantCollector.CONFIG);
    }
}
