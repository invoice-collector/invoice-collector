
import { SketchCollector } from '../../sketchCollector';

export class HavasVoyagesCollector extends SketchCollector {

    static CONFIG = {
        id: "havas_voyages",
        name: "Havas Voyages",
        description: "i18n.collectors.havas_voyages.description",
        version: "0",
        website: "https://www.havas-voyages.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778810.jpg",
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
        entryUrl: "https://www.havas-voyages.fr/",
    }

    constructor() {
        super(HavasVoyagesCollector.CONFIG);
    }
}
