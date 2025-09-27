
import { SketchCollector } from '../../sketchCollector';

export class OrangeBusinessBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_business_belgium",
        name: "Orange Business Belgium",
        description: "i18n.collectors.orange_business_belgium.description",
        version: "0",
        website: "https://eservices.business.orange.be/fr/b2bcustomer-zone/your-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778913.jpg",
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
        entryUrl: "https://eservices.business.orange.be/fr/b2bcustomer-zone/your-invoices",
    }

    constructor() {
        super(OrangeBusinessBelgiumCollector.CONFIG);
    }
}
