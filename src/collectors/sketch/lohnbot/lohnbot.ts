
import { SketchCollector } from '../../sketchCollector';

export class LohnbotCollector extends SketchCollector {

    static CONFIG = {
        id: "lohnbot",
        name: "Lohnbot",
        description: "i18n.collectors.lohnbot.description",
        version: "0",
        website: "https://app.lohnbot.at/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1222418.jpg",
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
        entryUrl: "https://app.lohnbot.at/login",
    }

    constructor() {
        super(LohnbotCollector.CONFIG);
    }
}
