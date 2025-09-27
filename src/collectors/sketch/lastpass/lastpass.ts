
import { SketchCollector } from '../../sketchCollector';

export class LastpassCollector extends SketchCollector {

    static CONFIG = {
        id: "lastpass",
        name: "LastPass",
        description: "i18n.collectors.lastpass.description",
        version: "0",
        website: "https://lastpass.com/company/#!/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6207.jpg",
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
        entryUrl: "https://lastpass.com/company/#!/dashboard",
    }

    constructor() {
        super(LastpassCollector.CONFIG);
    }
}
