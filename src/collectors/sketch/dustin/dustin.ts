
import { SketchCollector } from '../../sketchCollector';

export class DustinCollector extends SketchCollector {

    static CONFIG = {
        id: "dustin",
        name: "Dustin",
        description: "i18n.collectors.dustin.description",
        version: "0",
        website: "https://www.dustin.dk/orders/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1204057.jpg",
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
        entryUrl: "https://www.dustin.dk/orders/invoices",
    }

    constructor() {
        super(DustinCollector.CONFIG);
    }
}
