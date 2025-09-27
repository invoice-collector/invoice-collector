
import { SketchCollector } from '../../sketchCollector';

export class QuoraAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "quora_ads",
        name: "Quora Ads",
        description: "i18n.collectors.quora_ads.description",
        version: "0",
        website: "https://www.quora.com/ads/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241851.jpg",
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
        entryUrl: "https://www.quora.com/ads/billing",
    }

    constructor() {
        super(QuoraAdsCollector.CONFIG);
    }
}
