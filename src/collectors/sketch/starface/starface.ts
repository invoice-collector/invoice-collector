
import { SketchCollector } from '../../sketchCollector';

export class StarfaceCollector extends SketchCollector {

    static CONFIG = {
        id: "starface",
        name: "Starface",
        description: "i18n.collectors.starface.description",
        version: "0",
        website: "https://www.starface.de/portal/de/index.php?_ga=2.80546839.1662912395.1551639830-1731990487.1551639830",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26143.jpg",
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
        entryUrl: "https://www.starface.de/portal/de/index.php?_ga=2.80546839.1662912395.1551639830-1731990487.1551639830",
    }

    constructor() {
        super(StarfaceCollector.CONFIG);
    }
}
