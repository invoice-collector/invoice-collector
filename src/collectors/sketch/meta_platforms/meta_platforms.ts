
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MetaPlatformsCollector extends SketchCollector {

    static CONFIG = {
        id: "meta_platforms",
        name: "Meta Platforms",
        description: "i18n.collectors.meta_platforms.description",
        version: "0",
        website: "https://adsmanager.facebook.com/ads/manager/billing_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1880027.jpg",
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
        entryUrl: "https://adsmanager.facebook.com/ads/manager/billing_history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetaPlatformsCollector.CONFIG);
    }
}
