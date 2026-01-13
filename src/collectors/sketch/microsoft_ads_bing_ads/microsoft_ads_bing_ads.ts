
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MicrosoftAdsBingAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_ads_bing_ads",
        name: "Microsoft Ads(Bing Ads)",
        description: "i18n.collectors.microsoft_ads_bing_ads.description",
        version: "0",
        website: "https://ads.microsoft.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/452.jpg",
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
        loginUrl: "https://ads.microsoft.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MicrosoftAdsBingAdsCollector.CONFIG);
    }
}
