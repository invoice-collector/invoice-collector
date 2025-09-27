
import { SketchCollector } from '../../sketchCollector';

export class ComplianzCollector extends SketchCollector {

    static CONFIG = {
        id: "complianz",
        name: "complianz",
        description: "i18n.collectors.complianz.description",
        version: "0",
        website: "https://complianz.io/account/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1882049.jpg",
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
        entryUrl: "https://complianz.io/account/invoices/",
    }

    constructor() {
        super(ComplianzCollector.CONFIG);
    }
}
