
import { SketchCollector } from '../../sketchCollector';

export class RoyalMailInvoicingCollector extends SketchCollector {

    static CONFIG = {
        id: "royal_mail_invoicing",
        name: "Royal Mail - Invoicing",
        description: "i18n.collectors.royal_mail_invoicing.description",
        version: "0",
        website: "https://invoicing.royalmail.com/RMF/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1086474.jpg",
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
        entryUrl: "https://invoicing.royalmail.com/RMF/",
    }

    constructor() {
        super(RoyalMailInvoicingCollector.CONFIG);
    }
}
