
import { SketchCollector } from '../../sketchCollector';

export class AbebooksComCollector extends SketchCollector {

    static CONFIG = {
        id: "abebooks_com",
        name: "Abebooks.com",
        description: "i18n.collectors.abebooks_com.description",
        version: "0",
        website: "https://www.abebooks.com/my-account/payments/tax-invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1669253.jpg",
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
        entryUrl: "https://www.abebooks.com/my-account/payments/tax-invoices/",
    }

    constructor() {
        super(AbebooksComCollector.CONFIG);
    }
}
