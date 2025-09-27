
import { SketchCollector } from '../../sketchCollector';

export class MicrosoftAdsBingAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_ads_bing_ads",
        name: "Microsoft Ads(Bing Ads)",
        description: "i18n.collectors.microsoft_ads_bing_ads.description",
        version: "0",
        website: "https://ads.microsoft.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/452.jpg",
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
        entryUrl: "https://ads.microsoft.com/",
    }

    constructor() {
        super(MicrosoftAdsBingAdsCollector.CONFIG);
    }
}
