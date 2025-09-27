
import { SketchCollector } from '../../sketchCollector';

export class BrandnoozCollector extends SketchCollector {

    static CONFIG = {
        id: "brandnooz",
        name: "Brandnooz",
        description: "i18n.collectors.brandnooz.description",
        version: "0",
        website: "https://www.brandnooz.de/profil/meine_bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1229732.jpg",
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
        entryUrl: "https://www.brandnooz.de/profil/meine_bestellungen",
    }

    constructor() {
        super(BrandnoozCollector.CONFIG);
    }
}
