
import { SketchCollector } from '../../sketchCollector';

export class FairAnalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "fair_analytics",
        name: "Fair Analytics",
        description: "i18n.collectors.fair_analytics.description",
        version: "0",
        website: "https://www.fairanalytics.de/account-payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367556.jpg",
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
        entryUrl: "https://www.fairanalytics.de/account-payments",
    }

    constructor() {
        super(FairAnalyticsCollector.CONFIG);
    }
}
