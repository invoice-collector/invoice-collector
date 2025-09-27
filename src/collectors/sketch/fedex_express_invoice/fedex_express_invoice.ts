
import { SketchCollector } from '../../sketchCollector';

export class FedexExpressInvoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex_express_invoice",
        name: "Fedex Express - Invoice",
        description: "i18n.collectors.fedex_express_invoice.description",
        version: "0",
        website: "https://expressinvoice.fedex.com/Logon.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3027517.jpg",
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
        entryUrl: "https://expressinvoice.fedex.com/Logon.aspx",
    }

    constructor() {
        super(FedexExpressInvoiceCollector.CONFIG);
    }
}
