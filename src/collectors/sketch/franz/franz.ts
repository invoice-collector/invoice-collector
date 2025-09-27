
import { SketchCollector } from '../../sketchCollector';

export class FranzCollector extends SketchCollector {

    static CONFIG = {
        id: "franz",
        name: "Franz",
        description: "i18n.collectors.franz.description",
        version: "0",
        website: "https://meetfranz.com/user/invoices?utm_source=app&utm_medium=account_dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233032.jpg",
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
        entryUrl: "https://meetfranz.com/user/invoices?utm_source=app&utm_medium=account_dashboard",
    }

    constructor() {
        super(FranzCollector.CONFIG);
    }
}
