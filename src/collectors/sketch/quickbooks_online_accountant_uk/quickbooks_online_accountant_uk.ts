
import { SketchCollector } from '../../sketchCollector';

export class QuickbooksOnlineAccountantUkCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_online_accountant_uk",
        name: "QuickBooks Online Accountant UK",
        description: "i18n.collectors.quickbooks_online_accountant_uk.description",
        version: "0",
        website: "https://c1.qbo.intuit.com/c1/v1608.1641/0/login?redirect=true&accountant-sign-in=&redirect=true&locale=en_gb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107632.jpg",
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
        entryUrl: "https://c1.qbo.intuit.com/c1/v1608.1641/0/login?redirect=true&accountant-sign-in=&redirect=true&locale=en_gb",
    }

    constructor() {
        super(QuickbooksOnlineAccountantUkCollector.CONFIG);
    }
}
