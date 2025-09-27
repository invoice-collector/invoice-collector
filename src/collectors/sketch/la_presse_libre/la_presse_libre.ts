
import { SketchCollector } from '../../sketchCollector';

export class LaPresseLibreCollector extends SketchCollector {

    static CONFIG = {
        id: "la_presse_libre",
        name: "La Presse Libre",
        description: "i18n.collectors.la_presse_libre.description",
        version: "0",
        website: "https://beta.lapresselibre.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137048.jpg",
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
        entryUrl: "https://beta.lapresselibre.fr/",
    }

    constructor() {
        super(LaPresseLibreCollector.CONFIG);
    }
}
