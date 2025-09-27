
import { SketchCollector } from '../../sketchCollector';

export class InvoiceNinjaCollector extends SketchCollector {

    static CONFIG = {
        id: "invoice_ninja",
        name: "Invoice Ninja",
        description: "i18n.collectors.invoice_ninja.description",
        version: "0",
        website: "https://app.invoiceninja.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34236.jpg",
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
        entryUrl: "https://app.invoiceninja.com/login",
    }

    constructor() {
        super(InvoiceNinjaCollector.CONFIG);
    }
}
