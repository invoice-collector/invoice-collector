
import { SketchCollector } from '../../sketchCollector';

export class MulticardEniInvoicingCollector extends SketchCollector {

    static CONFIG = {
        id: "multicard_eni_invoicing",
        name: "Multicard Eni Invoicing",
        description: "i18n.collectors.multicard_eni_invoicing.description",
        version: "0",
        website: "https://selfcare.multicard.eni.com/apex/PortalVisualforce?country=de_DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2147180.jpg",
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
        entryUrl: "https://selfcare.multicard.eni.com/apex/PortalVisualforce?country=de_DE",
    }

    constructor() {
        super(MulticardEniInvoicingCollector.CONFIG);
    }
}
