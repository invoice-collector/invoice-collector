
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrandrewardCollector extends SketchCollector {

    static CONFIG = {
        id: "brandreward",
        name: "BrandReward",
        description: "i18n.collectors.brandreward.description",
        version: "0",
        website: "https://www.brandreward.com/b_payment.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2008242.jpg",
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
        entryUrl: "https://www.brandreward.com/b_payment.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrandrewardCollector.CONFIG);
    }
}
