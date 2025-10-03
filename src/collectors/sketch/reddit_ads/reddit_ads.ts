
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RedditAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "reddit_ads",
        name: "Reddit Ads",
        description: "i18n.collectors.reddit_ads.description",
        version: "0",
        website: "https://ads.reddit.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4513423.jpg",
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
        entryUrl: "https://ads.reddit.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RedditAdsCollector.CONFIG);
    }
}
