
import { SketchCollector } from '../../sketchCollector';

export class FrontierEnhancedOnlineBillingCollector extends SketchCollector {

    static CONFIG = {
        id: "frontier_enhanced_online_billing",
        name: "Frontier Enhanced Online Billing",
        description: "i18n.collectors.frontier_enhanced_online_billing.description",
        version: "0",
        website: "https://enhancedonlinebilling.frontier.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178983.jpg",
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
        entryUrl: "https://enhancedonlinebilling.frontier.com/",
    }

    constructor() {
        super(FrontierEnhancedOnlineBillingCollector.CONFIG);
    }
}
