
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_ads",
        name: "Amazon Ads",
        description: "i18n.collectors.amazon_ads.description",
        version: "0",
        website: "https://advertising.amazon.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117320.jpg",
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
        entryUrl: "https://advertising.amazon.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonAdsCollector.CONFIG);
    }
}
