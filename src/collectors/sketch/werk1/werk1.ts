
import { SketchCollector } from '../../sketchCollector';

export class Werk1Collector extends SketchCollector {

    static CONFIG = {
        id: "werk1",
        name: "Werk1",
        description: "i18n.collectors.werk1.description",
        version: "0",
        website: "https://werk1.officernd.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221819.jpg",
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
        entryUrl: "https://werk1.officernd.com/billing/invoices",
    }

    constructor() {
        super(Werk1Collector.CONFIG);
    }
}
