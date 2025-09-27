
import { SketchCollector } from '../../sketchCollector';

export class AfiAiCollector extends SketchCollector {

    static CONFIG = {
        id: "afi_ai",
        name: "afi.ai",
        description: "i18n.collectors.afi_ai.description",
        version: "0",
        website: "https://app.afi.ai/orgs/01GVDMXKVWW0DGEY2Y6DX7JF5R/billing/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863235.jpg",
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
        entryUrl: "https://app.afi.ai/orgs/01GVDMXKVWW0DGEY2Y6DX7JF5R/billing/payment-history",
    }

    constructor() {
        super(AfiAiCollector.CONFIG);
    }
}
