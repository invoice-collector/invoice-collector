
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloseCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "close_crm",
        name: "Close CRM",
        description: "i18n.collectors.close_crm.description",
        version: "0",
        website: "https://app.close.com/settings/billing/payment/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1764023.jpg",
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
        entryUrl: "https://app.close.com/settings/billing/payment/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloseCrmCollector.CONFIG);
    }
}
