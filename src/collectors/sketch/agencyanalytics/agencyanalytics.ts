
import { SketchCollector } from '../../sketchCollector';

export class AgencyanalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "agencyanalytics",
        name: "AgencyAnalytics",
        description: "i18n.collectors.agencyanalytics.description",
        version: "0",
        website: "https://app.agencyanalytics.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33379.jpg",
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
        entryUrl: "https://app.agencyanalytics.com/#/login",
    }

    constructor() {
        super(AgencyanalyticsCollector.CONFIG);
    }
}
