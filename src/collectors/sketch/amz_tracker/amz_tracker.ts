
import { SketchCollector } from '../../sketchCollector';

export class AmzTrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "amz_tracker",
        name: "AMZ Tracker",
        description: "i18n.collectors.amz_tracker.description",
        version: "0",
        website: "https://www.amztracker.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19834.jpg",
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
        entryUrl: "https://www.amztracker.com",
    }

    constructor() {
        super(AmzTrackerCollector.CONFIG);
    }
}
