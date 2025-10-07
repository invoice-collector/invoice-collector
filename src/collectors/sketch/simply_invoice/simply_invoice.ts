
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimplyInvoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "simply_invoice",
        name: "Simply Invoice",
        description: "i18n.collectors.simply_invoice.description",
        version: "0",
        website: "https://app.invoicesimple.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097934.jpg",
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
        entryUrl: "https://app.invoicesimple.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimplyInvoiceCollector.CONFIG);
    }
}
