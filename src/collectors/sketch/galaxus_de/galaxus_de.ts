
import { SketchCollector } from '../../sketchCollector';

export class GalaxusDeCollector extends SketchCollector {

    static CONFIG = {
        id: "galaxus_de",
        name: "Galaxus(.de)",
        description: "i18n.collectors.galaxus_de.description",
        version: "0",
        website: "https://www.galaxus.de/de/Order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170772.jpg",
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
        entryUrl: "https://www.galaxus.de/de/Order",
    }

    constructor() {
        super(GalaxusDeCollector.CONFIG);
    }
}
