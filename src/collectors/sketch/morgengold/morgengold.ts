
import { SketchCollector } from '../../sketchCollector';

export class MorgengoldCollector extends SketchCollector {

    static CONFIG = {
        id: "morgengold",
        name: "Morgengold",
        description: "i18n.collectors.morgengold.description",
        version: "0",
        website: "https://www.morgengold.de/customer/invoiceHistory/invoiceHistory.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759689.jpg",
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
        entryUrl: "https://www.morgengold.de/customer/invoiceHistory/invoiceHistory.xhtml",
    }

    constructor() {
        super(MorgengoldCollector.CONFIG);
    }
}
