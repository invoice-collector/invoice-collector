
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppleSearchAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_search_ads",
        name: "Apple Search Ads",
        description: "i18n.collectors.apple_search_ads.description",
        version: "0",
        website: "https://app.searchads.apple.com/cm/app/settings/billing/creditcard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127550.jpg",
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
        loginUrl: "https://app.searchads.apple.com/cm/app/settings/billing/creditcard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AppleSearchAdsCollector.CONFIG);
    }
}
