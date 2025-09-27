
import { SketchCollector } from '../../sketchCollector';

export class GurkerlCollector extends SketchCollector {

    static CONFIG = {
        id: "gurkerl",
        name: "gurkerl",
        description: "i18n.collectors.gurkerl.description",
        version: "0",
        website: "https://www.gurkerl.at/benutzer/profil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920873.jpg",
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
        entryUrl: "https://www.gurkerl.at/benutzer/profil",
    }

    constructor() {
        super(GurkerlCollector.CONFIG);
    }
}
