
import { SketchCollector } from '../../sketchCollector';

export class QuickbooksOnlineAccountantCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_online_accountant",
        name: "QuickBooks Online Accountant",
        description: "i18n.collectors.quickbooks_online_accountant.description",
        version: "0",
        website: "https://quickbooks.intuit.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107635.jpg",
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
        entryUrl: "https://quickbooks.intuit.com/",
    }

    constructor() {
        super(QuickbooksOnlineAccountantCollector.CONFIG);
    }
}
