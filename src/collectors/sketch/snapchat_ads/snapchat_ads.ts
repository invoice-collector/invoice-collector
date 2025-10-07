
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SnapchatAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "snapchat_ads",
        name: "Snapchat Ads",
        description: "i18n.collectors.snapchat_ads.description",
        version: "0",
        website: "https://accounts.snapchat.com/accounts/login?client_id=ads-api&referrer=https%3A%2F%2Fads.snapchat.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103251.jpg",
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
        entryUrl: "https://accounts.snapchat.com/accounts/login?client_id=ads-api&referrer=https%3A%2F%2Fads.snapchat.com%2F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SnapchatAdsCollector.CONFIG);
    }
}
