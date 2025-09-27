
import { SketchCollector } from '../../sketchCollector';

export class CintasInvoicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "cintas_invoice_portal",
        name: "Cintas - Invoice Portal",
        description: "i18n.collectors.cintas_invoice_portal.description",
        version: "0",
        website: "https://account.cintas.com/online/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1197149.jpg",
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
        entryUrl: "https://account.cintas.com/online/login",
    }

    constructor() {
        super(CintasInvoicePortalCollector.CONFIG);
    }
}
