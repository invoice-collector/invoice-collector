
import { SketchCollector } from '../../sketchCollector';

export class DeeplCollector extends SketchCollector {

    static CONFIG = {
        id: "deepl",
        name: "DeepL",
        description: "i18n.collectors.deepl.description",
        version: "0",
        website: "https://www.deepl.com/pro-account.html?page=category_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79610.jpg",
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
        entryUrl: "https://www.deepl.com/pro-account.html?page=category_invoices",
    }

    constructor() {
        super(DeeplCollector.CONFIG);
    }
}
