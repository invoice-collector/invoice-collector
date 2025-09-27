
import { SketchCollector } from '../../sketchCollector';

export class SurferCollector extends SketchCollector {

    static CONFIG = {
        id: "surfer",
        name: "Surfer",
        description: "i18n.collectors.surfer.description",
        version: "0",
        website: "https://app.surferseo.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549041.jpg",
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
        entryUrl: "https://app.surferseo.com/billing/invoices",
    }

    constructor() {
        super(SurferCollector.CONFIG);
    }
}
