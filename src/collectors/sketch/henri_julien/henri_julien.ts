
import { SketchCollector } from '../../sketchCollector';

export class HenriJulienCollector extends SketchCollector {

    static CONFIG = {
        id: "henri_julien",
        name: "Henri JULIEN",
        description: "i18n.collectors.henri_julien.description",
        version: "0",
        website: "https://henrijulien.fr/invoices/invoicelist/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4532467.jpg",
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
        entryUrl: "https://henrijulien.fr/invoices/invoicelist/",
    }

    constructor() {
        super(HenriJulienCollector.CONFIG);
    }
}
