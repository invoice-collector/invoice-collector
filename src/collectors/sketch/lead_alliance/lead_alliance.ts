
import { SketchCollector } from '../../sketchCollector';

export class LeadAllianceCollector extends SketchCollector {

    static CONFIG = {
        id: "lead_alliance",
        name: "lead alliance",
        description: "i18n.collectors.lead_alliance.description",
        version: "0",
        website: "https://www.lead-alliance.net/partner/financial/payments/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94988.jpg",
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
        entryUrl: "https://www.lead-alliance.net/partner/financial/payments/index",
    }

    constructor() {
        super(LeadAllianceCollector.CONFIG);
    }
}
