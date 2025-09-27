
import { SketchCollector } from '../../sketchCollector';

export class EasymarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "easymarketing",
        name: "easymarketing",
        description: "i18n.collectors.easymarketing.description",
        version: "0",
        website: "https://easymarketing.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57093.jpg",
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
        entryUrl: "https://easymarketing.de/invoices",
    }

    constructor() {
        super(EasymarketingCollector.CONFIG);
    }
}
