
import { SketchCollector } from '../../sketchCollector';

export class IataCustomerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "iata_customer_portal",
        name: "IATA Customer Portal",
        description: "i18n.collectors.iata_customer_portal.description",
        version: "0",
        website: "https://casslink2.iata.org/iata-cass-frontend-container/output/output-agents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419784.jpg",
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
        entryUrl: "https://casslink2.iata.org/iata-cass-frontend-container/output/output-agents",
    }

    constructor() {
        super(IataCustomerPortalCollector.CONFIG);
    }
}
