
import { SketchCollector } from '../../sketchCollector';

export class BizayCollector extends SketchCollector {

    static CONFIG = {
        id: "bizay",
        name: "bizay",
        description: "i18n.collectors.bizay.description",
        version: "0",
        website: "https://www.bizay.de/Account/Login?ReturnUrl=%2FOrder%2FInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1968095.jpg",
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
        entryUrl: "https://www.bizay.de/Account/Login?ReturnUrl=%2FOrder%2FInvoices",
    }

    constructor() {
        super(BizayCollector.CONFIG);
    }
}
