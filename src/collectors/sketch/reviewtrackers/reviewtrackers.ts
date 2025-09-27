
import { SketchCollector } from '../../sketchCollector';

export class ReviewtrackersCollector extends SketchCollector {

    static CONFIG = {
        id: "reviewtrackers",
        name: "ReviewTrackers",
        description: "i18n.collectors.reviewtrackers.description",
        version: "0",
        website: "https://app.reviewtrackers.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121197.jpg",
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
        entryUrl: "https://app.reviewtrackers.com/settings/billing",
    }

    constructor() {
        super(ReviewtrackersCollector.CONFIG);
    }
}
