
import { SketchCollector } from '../../sketchCollector';

export class EInvoiceBgCollector extends SketchCollector {

    static CONFIG = {
        id: "e_invoice_bg",
        name: "e-invoice.bg",
        description: "i18n.collectors.e_invoice_bg.description",
        version: "0",
        website: "https://www.e-invoice.bg/Reciever/RecievedInvoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252911.jpg",
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
        entryUrl: "https://www.e-invoice.bg/Reciever/RecievedInvoices.aspx",
    }

    constructor() {
        super(EInvoiceBgCollector.CONFIG);
    }
}
