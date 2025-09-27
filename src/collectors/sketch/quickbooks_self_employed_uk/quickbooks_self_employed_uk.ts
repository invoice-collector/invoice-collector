
import { SketchCollector } from '../../sketchCollector';

export class QuickbooksSelfEmployedUkCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_self_employed_uk",
        name: "QuickBooks Self-Employed UK",
        description: "i18n.collectors.quickbooks_self_employed_uk.description",
        version: "0",
        website: "https://quickbooks.intuit.com/uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107633.jpg",
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
        entryUrl: "https://quickbooks.intuit.com/uk/",
    }

    constructor() {
        super(QuickbooksSelfEmployedUkCollector.CONFIG);
    }
}
