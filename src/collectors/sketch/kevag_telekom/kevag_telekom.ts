
import { SketchCollector } from '../../sketchCollector';

export class KevagTelekomCollector extends SketchCollector {

    static CONFIG = {
        id: "kevag_telekom",
        name: "KEVAG Telekom",
        description: "i18n.collectors.kevag_telekom.description",
        version: "0",
        website: "https://kundencenter.kevag-telekom.de/documents/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9471.jpg",
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
        entryUrl: "https://kundencenter.kevag-telekom.de/documents/invoices/",
    }

    constructor() {
        super(KevagTelekomCollector.CONFIG);
    }
}
