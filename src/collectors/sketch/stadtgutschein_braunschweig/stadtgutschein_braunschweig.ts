
import { SketchCollector } from '../../sketchCollector';

export class StadtgutscheinBraunschweigCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtgutschein_braunschweig",
        name: "Stadtgutschein Braunschweig",
        description: "i18n.collectors.stadtgutschein_braunschweig.description",
        version: "0",
        website: "https://www.stadtgutschein-braunschweig.de/administration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1503185.jpg",
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
        entryUrl: "https://www.stadtgutschein-braunschweig.de/administration",
    }

    constructor() {
        super(StadtgutscheinBraunschweigCollector.CONFIG);
    }
}
