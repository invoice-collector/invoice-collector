
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _15fiveCollector extends SketchCollector {

    static CONFIG = {
        id: "15five",
        name: "15Five",
        description: "i18n.collectors.15five.description",
        version: "0",
        website: "https://1985663.ecommerce.zuora.com/portal/viewAllInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1225160.jpg",
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
        entryUrl: "https://1985663.ecommerce.zuora.com/portal/viewAllInvoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_15fiveCollector.CONFIG);
    }
}
