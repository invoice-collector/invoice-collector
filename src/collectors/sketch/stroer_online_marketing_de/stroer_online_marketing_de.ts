
import { SketchCollector } from '../../sketchCollector';

export class StroerOnlineMarketingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "stroer_online_marketing_de",
        name: "Stroer Online Marketing DE",
        description: "i18n.collectors.stroer_online_marketing_de.description",
        version: "0",
        website: "https://kundencenter.stroeer-online-marketing.de/auth/login?next=%2Fanalytics%2Foverview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2741019.jpg",
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
        entryUrl: "https://kundencenter.stroeer-online-marketing.de/auth/login?next=%2Fanalytics%2Foverview",
    }

    constructor() {
        super(StroerOnlineMarketingDeCollector.CONFIG);
    }
}
