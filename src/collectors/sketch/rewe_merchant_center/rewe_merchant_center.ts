
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReweMerchantCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "rewe_merchant_center",
        name: "REWE Merchant Center",
        description: "i18n.collectors.rewe_merchant_center.description",
        version: "0",
        website: "https://mc.europe-west1.gcp.commercetools.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/671969.jpg",
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
        loginUrl: "https://mc.europe-west1.gcp.commercetools.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ReweMerchantCenterCollector.CONFIG);
    }
}
