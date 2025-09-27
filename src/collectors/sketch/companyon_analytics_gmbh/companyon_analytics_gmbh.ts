
import { SketchCollector } from '../../sketchCollector';

export class CompanyonAnalyticsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "companyon_analytics_gmbh",
        name: "Companyon Analytics GmbH",
        description: "i18n.collectors.companyon_analytics_gmbh.description",
        version: "0",
        website: "https://app.companyon.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200355.jpg",
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
        entryUrl: "https://app.companyon.de/",
    }

    constructor() {
        super(CompanyonAnalyticsGmbhCollector.CONFIG);
    }
}
