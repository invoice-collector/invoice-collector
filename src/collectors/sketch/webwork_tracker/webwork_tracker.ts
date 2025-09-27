
import { SketchCollector } from '../../sketchCollector';

export class WebworkTrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "webwork_tracker",
        name: "WebWork-Tracker",
        description: "i18n.collectors.webwork_tracker.description",
        version: "0",
        website: "https://www.webwork-tracker.com/app/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514568.jpg",
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
        entryUrl: "https://www.webwork-tracker.com/app/invoices",
    }

    constructor() {
        super(WebworkTrackerCollector.CONFIG);
    }
}
