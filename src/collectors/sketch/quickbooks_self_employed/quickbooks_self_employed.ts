
import { SketchCollector } from '../../sketchCollector';

export class QuickbooksSelfEmployedCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_self_employed",
        name: "QuickBooks Self-Employed",
        description: "i18n.collectors.quickbooks_self_employed.description",
        version: "0",
        website: "https://selfemployed.intuit.com/login?utm_source=QBO&utm_medium=Web&utm_content=SignIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107634.jpg",
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
        entryUrl: "https://selfemployed.intuit.com/login?utm_source=QBO&utm_medium=Web&utm_content=SignIn",
    }

    constructor() {
        super(QuickbooksSelfEmployedCollector.CONFIG);
    }
}
