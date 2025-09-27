
import { SketchCollector } from '../../sketchCollector';

export class GoogleAdwordsExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "google_adwords_express",
        name: "Google AdWords Express",
        description: "i18n.collectors.google_adwords_express.description",
        version: "0",
        website: "https://adwords.google.de/express/plus/Business?hl=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78660.jpg",
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
        entryUrl: "https://adwords.google.de/express/plus/Business?hl=de",
    }

    constructor() {
        super(GoogleAdwordsExpressCollector.CONFIG);
    }
}
