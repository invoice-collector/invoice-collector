
import { SketchCollector } from '../../sketchCollector';

export class YnabCollector extends SketchCollector {

    static CONFIG = {
        id: "ynab",
        name: "YNAB",
        description: "i18n.collectors.ynab.description",
        version: "0",
        website: "https://app.ynab.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334498.jpg",
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
        entryUrl: "https://app.ynab.com/invoices",
    }

    constructor() {
        super(YnabCollector.CONFIG);
    }
}
