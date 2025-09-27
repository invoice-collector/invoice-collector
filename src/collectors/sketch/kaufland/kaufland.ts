
import { SketchCollector } from '../../sketchCollector';

export class KauflandCollector extends SketchCollector {

    static CONFIG = {
        id: "kaufland",
        name: "Kaufland",
        description: "i18n.collectors.kaufland.description",
        version: "0",
        website: "https://sellerportal.kaufland.de/accounting/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24851.jpg",
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
        entryUrl: "https://sellerportal.kaufland.de/accounting/invoices",
    }

    constructor() {
        super(KauflandCollector.CONFIG);
    }
}
