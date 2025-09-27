
import { SketchCollector } from '../../sketchCollector';

export class OfficerAndDCollector extends SketchCollector {

    static CONFIG = {
        id: "officer_and_d",
        name: "OfficeR&D",
        description: "i18n.collectors.officer_and_d.description",
        version: "0",
        website: "https://www.officernd.com/billing/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51412.jpg",
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
        entryUrl: "https://www.officernd.com/billing/invoices/",
    }

    constructor() {
        super(OfficerAndDCollector.CONFIG);
    }
}
