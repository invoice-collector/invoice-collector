
import { SketchCollector } from '../../sketchCollector';

export class MailifyCollector extends SketchCollector {

    static CONFIG = {
        id: "mailify",
        name: "Mailify",
        description: "i18n.collectors.mailify.description",
        version: "0",
        website: "https://mailify.app/#!/p/settings/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102487.jpg",
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
        entryUrl: "https://mailify.app/#!/p/settings/account/invoice",
    }

    constructor() {
        super(MailifyCollector.CONFIG);
    }
}
