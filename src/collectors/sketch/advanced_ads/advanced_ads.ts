
import { SketchCollector } from '../../sketchCollector';

export class AdvancedAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "advanced_ads",
        name: "Advanced Ads",
        description: "i18n.collectors.advanced_ads.description",
        version: "0",
        website: "https://wpadvancedads.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/810071.jpg",
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
        entryUrl: "https://wpadvancedads.com/account/",
    }

    constructor() {
        super(AdvancedAdsCollector.CONFIG);
    }
}
