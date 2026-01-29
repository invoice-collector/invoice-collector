
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IataCustomerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "iata_customer_portal",
        name: "IATA Customer Portal",
        description: "i18n.collectors.iata_customer_portal.description",
        version: "0",
        website: "https://casslink2.iata.org/iata-cass-frontend-container/output/output-agents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419784.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://casslink2.iata.org/iata-cass-frontend-container/output/output-agents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IataCustomerPortalCollector.CONFIG);
    }
}
