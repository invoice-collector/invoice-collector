
import { SketchCollector } from '../../sketchCollector';

export class PuretelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "puretelecom",
        name: "Puretelecom",
        description: "i18n.collectors.puretelecom.description",
        version: "0",
        website: "https://mypure.puretelecom.ie/MyPure/billHistory.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555202.jpg",
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
        entryUrl: "https://mypure.puretelecom.ie/MyPure/billHistory.php",
    }

    constructor() {
        super(PuretelecomCollector.CONFIG);
    }
}
