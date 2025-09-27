
import { SketchCollector } from '../../sketchCollector';

export class ClassicAnalyticsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "classic_analytics_gmbh",
        name: "Classic Analytics GmbH",
        description: "i18n.collectors.classic_analytics_gmbh.description",
        version: "0",
        website: "https://www.classic-analytics.de/de/my_account/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3105870.jpg",
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
        entryUrl: "https://www.classic-analytics.de/de/my_account/bills",
    }

    constructor() {
        super(ClassicAnalyticsGmbhCollector.CONFIG);
    }
}
