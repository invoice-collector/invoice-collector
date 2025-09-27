
import { SketchCollector } from '../../sketchCollector';

export class MailjetCollector extends SketchCollector {

    static CONFIG = {
        id: "mailjet",
        name: "mailjet",
        description: "i18n.collectors.mailjet.description",
        version: "0",
        website: "https://app.mailjet.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7884.jpg",
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
        entryUrl: "https://app.mailjet.com/account/billing",
    }

    constructor() {
        super(MailjetCollector.CONFIG);
    }
}
