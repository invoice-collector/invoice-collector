
import { SketchCollector } from '../../sketchCollector';

export class FokusMspCollector extends SketchCollector {

    static CONFIG = {
        id: "fokus_msp",
        name: "Fokus MSP",
        description: "i18n.collectors.fokus_msp.description",
        version: "0",
        website: "https://msp-marketplace.eu/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730017.jpg",
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
        entryUrl: "https://msp-marketplace.eu/invoices",
    }

    constructor() {
        super(FokusMspCollector.CONFIG);
    }
}
