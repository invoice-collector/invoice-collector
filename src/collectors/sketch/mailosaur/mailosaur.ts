
import { SketchCollector } from '../../sketchCollector';

export class MailosaurCollector extends SketchCollector {

    static CONFIG = {
        id: "mailosaur",
        name: "Mailosaur",
        description: "i18n.collectors.mailosaur.description",
        version: "0",
        website: "https://mailosaur.com/app/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732362.jpg",
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
        entryUrl: "https://mailosaur.com/app/account/billing",
    }

    constructor() {
        super(MailosaurCollector.CONFIG);
    }
}
