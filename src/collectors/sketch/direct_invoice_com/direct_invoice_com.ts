
import { SketchCollector } from '../../sketchCollector';

export class DirectInvoiceComCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_invoice_com",
        name: "direct-invoice.com",
        description: "i18n.collectors.direct_invoice_com.description",
        version: "0",
        website: "https://direct-invoice.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132308.jpg",
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
        entryUrl: "https://direct-invoice.com",
    }

    constructor() {
        super(DirectInvoiceComCollector.CONFIG);
    }
}
