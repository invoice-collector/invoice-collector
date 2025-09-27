
import { SketchCollector } from '../../sketchCollector';

export class ScaleInsightsCollector extends SketchCollector {

    static CONFIG = {
        id: "scale_insights",
        name: "Scale Insights",
        description: "i18n.collectors.scale_insights.description",
        version: "0",
        website: "https://portal.scaleinsights.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2656469.jpg",
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
        entryUrl: "https://portal.scaleinsights.com",
    }

    constructor() {
        super(ScaleInsightsCollector.CONFIG);
    }
}
