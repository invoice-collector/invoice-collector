
import { SketchCollector } from '../../sketchCollector';

export class PowerMyAnalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "power_my_analytics",
        name: "power my analytics",
        description: "i18n.collectors.power_my_analytics.description",
        version: "0",
        website: "https://hub.powermyanalytics.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920846.jpg",
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
        entryUrl: "https://hub.powermyanalytics.com/",
    }

    constructor() {
        super(PowerMyAnalyticsCollector.CONFIG);
    }
}
