
import { SketchCollector } from '../../sketchCollector';

export class MailevaCollector extends SketchCollector {

    static CONFIG = {
        id: "maileva",
        name: "MAILEVA",
        description: "i18n.collectors.maileva.description",
        version: "0",
        website: "https://secure2.maileva.com/customer/invoices/list/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612022.jpg",
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
        entryUrl: "https://secure2.maileva.com/customer/invoices/list/",
    }

    constructor() {
        super(MailevaCollector.CONFIG);
    }
}
