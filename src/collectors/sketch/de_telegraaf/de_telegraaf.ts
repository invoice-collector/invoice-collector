
import { SketchCollector } from '../../sketchCollector';

export class DeTelegraafCollector extends SketchCollector {

    static CONFIG = {
        id: "de_telegraaf",
        name: "De Telegraaf",
        description: "i18n.collectors.de_telegraaf.description",
        version: "0",
        website: "https://mijn.telegraaf.nl/abonnement/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4569009.jpg",
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
        entryUrl: "https://mijn.telegraaf.nl/abonnement/",
    }

    constructor() {
        super(DeTelegraafCollector.CONFIG);
    }
}
