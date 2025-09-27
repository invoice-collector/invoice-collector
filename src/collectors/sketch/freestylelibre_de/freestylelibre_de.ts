
import { SketchCollector } from '../../sketchCollector';

export class FreestylelibreDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freestylelibre_de",
        name: "freestylelibre.de",
        description: "i18n.collectors.freestylelibre_de.description",
        version: "0",
        website: "https://www.freestylelibre.de/anmelden/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035436.jpg",
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
        entryUrl: "https://www.freestylelibre.de/anmelden/login.html",
    }

    constructor() {
        super(FreestylelibreDeCollector.CONFIG);
    }
}
