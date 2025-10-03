
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProRankTrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "pro_rank_tracker",
        name: "Pro Rank Tracker",
        description: "i18n.collectors.pro_rank_tracker.description",
        version: "0",
        website: "http://www.proranktracker.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26391.jpg",
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
        entryUrl: "http://www.proranktracker.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProRankTrackerCollector.CONFIG);
    }
}
