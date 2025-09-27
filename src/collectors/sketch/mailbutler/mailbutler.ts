
import { SketchCollector } from '../../sketchCollector';

export class MailbutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "mailbutler",
        name: "Mailbutler",
        description: "i18n.collectors.mailbutler.description",
        version: "0",
        website: "https://mailbutler.recurly.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77258.jpg",
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
        entryUrl: "https://mailbutler.recurly.com/account",
    }

    constructor() {
        super(MailbutlerCollector.CONFIG);
    }
}
