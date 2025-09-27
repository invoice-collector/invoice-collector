
import { SketchCollector } from '../../sketchCollector';

export class ProtonmailCollector extends SketchCollector {

    static CONFIG = {
        id: "protonmail",
        name: "ProtonMail",
        description: "i18n.collectors.protonmail.description",
        version: "0",
        website: "https://account.protonmail.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988601.jpg",
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
        entryUrl: "https://account.protonmail.com/login",
    }

    constructor() {
        super(ProtonmailCollector.CONFIG);
    }
}
