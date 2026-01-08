
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrouponMerchantFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "groupon_merchant_france",
        name: "Groupon Merchant - France",
        description: "i18n.collectors.groupon_merchant_france.description",
        version: "0",
        website: "https://www.groupon.fr/merchant/center/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1166869.jpg",
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
        loginUrl: "https://www.groupon.fr/merchant/center/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrouponMerchantFranceCollector.CONFIG);
    }
}
