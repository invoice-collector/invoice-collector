
import { SketchCollector } from '../../sketchCollector';

export class WestnetzCollector extends SketchCollector {

    static CONFIG = {
        id: "westnetz",
        name: "westnetz",
        description: "i18n.collectors.westnetz.description",
        version: "0",
        website: "https://service.westnetz.de/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/842048.jpg",
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
        entryUrl: "https://service.westnetz.de/Account/Login",
    }

    constructor() {
        super(WestnetzCollector.CONFIG);
    }
}
