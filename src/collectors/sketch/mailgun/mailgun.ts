
import { SketchCollector } from '../../sketchCollector';

export class MailgunCollector extends SketchCollector {

    static CONFIG = {
        id: "mailgun",
        name: "Mailgun",
        description: "i18n.collectors.mailgun.description",
        version: "0",
        website: "https://app.mailgun.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6716.jpg",
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
        entryUrl: "https://app.mailgun.com",
    }

    constructor() {
        super(MailgunCollector.CONFIG);
    }
}
