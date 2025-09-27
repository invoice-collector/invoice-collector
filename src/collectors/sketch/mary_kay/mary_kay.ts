
import { SketchCollector } from '../../sketchCollector';

export class MaryKayCollector extends SketchCollector {

    static CONFIG = {
        id: "mary_kay",
        name: "Mary Kay",
        description: "i18n.collectors.mary_kay.description",
        version: "0",
        website: "https://mk.marykayintouch.de/s/reports/bills-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1577631.jpg",
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
        entryUrl: "https://mk.marykayintouch.de/s/reports/bills-invoices",
    }

    constructor() {
        super(MaryKayCollector.CONFIG);
    }
}
