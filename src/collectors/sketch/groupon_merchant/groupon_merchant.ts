
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrouponMerchantCollector extends SketchCollector {

    static CONFIG = {
        id: "groupon_merchant",
        name: "Groupon Merchant",
        description: "i18n.collectors.groupon_merchant.description",
        version: "0",
        website: "https://www.groupon.de/merchant/center/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36508.jpg",
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
        entryUrl: "https://www.groupon.de/merchant/center/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrouponMerchantCollector.CONFIG);
    }
}
