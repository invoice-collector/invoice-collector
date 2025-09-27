
import { SketchCollector } from '../../sketchCollector';

export class NiftyimagesCollector extends SketchCollector {

    static CONFIG = {
        id: "niftyimages",
        name: "Niftyimages",
        description: "i18n.collectors.niftyimages.description",
        version: "0",
        website: "https://ux.niftyimages.com/Billing/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762259.jpg",
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
        entryUrl: "https://ux.niftyimages.com/Billing/Invoices",
    }

    constructor() {
        super(NiftyimagesCollector.CONFIG);
    }
}
