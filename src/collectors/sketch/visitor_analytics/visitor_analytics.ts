
import { SketchCollector } from '../../sketchCollector';

export class VisitorAnalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "visitor_analytics",
        name: "Visitor Analytics",
        description: "i18n.collectors.visitor_analytics.description",
        version: "0",
        website: "https://app.visitor-analytics.io/website/92ab0db8-c4c6-11ed-b589-901b0edac50a/settings/subscription#payment-method",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862681.jpg",
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
        entryUrl: "https://app.visitor-analytics.io/website/92ab0db8-c4c6-11ed-b589-901b0edac50a/settings/subscription#payment-method",
    }

    constructor() {
        super(VisitorAnalyticsCollector.CONFIG);
    }
}
