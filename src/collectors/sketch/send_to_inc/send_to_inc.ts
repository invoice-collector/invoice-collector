
import { SketchCollector } from '../../sketchCollector';

export class SendToIncCollector extends SketchCollector {

    static CONFIG = {
        id: "send_to_inc",
        name: "Send to Inc",
        description: "i18n.collectors.send_to_inc.description",
        version: "0",
        website: "https://sendtoinc.com/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8662.jpg",
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
        entryUrl: "https://sendtoinc.com/accounts/login/",
    }

    constructor() {
        super(SendToIncCollector.CONFIG);
    }
}
