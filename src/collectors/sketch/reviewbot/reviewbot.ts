
import { SketchCollector } from '../../sketchCollector';

export class ReviewbotCollector extends SketchCollector {

    static CONFIG = {
        id: "reviewbot",
        name: "ReviewBot",
        description: "i18n.collectors.reviewbot.description",
        version: "0",
        website: "https://app.reviewbot.io/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517751.jpg",
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
        entryUrl: "https://app.reviewbot.io/dashboard/billing",
    }

    constructor() {
        super(ReviewbotCollector.CONFIG);
    }
}
