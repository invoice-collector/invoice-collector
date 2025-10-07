
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UservoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "uservoice",
        name: "uservoice",
        description: "i18n.collectors.uservoice.description",
        version: "0",
        website: "https://www.billingportal.com/s/uservoice/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6451.jpg",
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
        entryUrl: "https://www.billingportal.com/s/uservoice/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UservoiceCollector.CONFIG);
    }
}
