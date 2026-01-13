
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BusinessFacebookCollector extends SketchCollector {

    static CONFIG = {
        id: "business_facebook",
        name: "business facebook",
        description: "i18n.collectors.business_facebook.description",
        version: "0",
        website: "https://business.facebook.com/ads/manager/billing_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1241521.jpg",
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
        loginUrl: "https://business.facebook.com/ads/manager/billing_history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BusinessFacebookCollector.CONFIG);
    }
}
