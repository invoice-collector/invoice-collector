
import { SketchCollector } from '../../sketchCollector';

export class GammaCustomerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "gamma_customer_portal",
        name: "Gamma - Customer Portal",
        description: "i18n.collectors.gamma_customer_portal.description",
        version: "0",
        website: "https://customers.gamma.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396504.jpg",
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
        entryUrl: "https://customers.gamma.co.uk/",
    }

    constructor() {
        super(GammaCustomerPortalCollector.CONFIG);
    }
}
