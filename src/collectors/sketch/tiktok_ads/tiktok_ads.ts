
import { SketchCollector } from '../../sketchCollector';

export class TiktokAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "tiktok_ads",
        name: "TikTok Ads",
        description: "i18n.collectors.tiktok_ads.description",
        version: "0",
        website: "https://ads.tiktok.com/i18n/account/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/707216.jpg",
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
        entryUrl: "https://ads.tiktok.com/i18n/account/payment",
    }

    constructor() {
        super(TiktokAdsCollector.CONFIG);
    }
}
