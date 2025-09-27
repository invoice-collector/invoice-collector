
import { SketchCollector } from '../../sketchCollector';

export class MailpoetCollector extends SketchCollector {

    static CONFIG = {
        id: "mailpoet",
        name: "Mailpoet",
        description: "i18n.collectors.mailpoet.description",
        version: "0",
        website: "https://account.mailpoet.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/98912.jpg",
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
        entryUrl: "https://account.mailpoet.com/invoices",
    }

    constructor() {
        super(MailpoetCollector.CONFIG);
    }
}
