
import { SketchCollector } from '../../sketchCollector';

export class PoweoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "poweo_fr",
        name: "Poweo.fr",
        description: "i18n.collectors.poweo_fr.description",
        version: "0",
        website: "https://www.poweo.be/nl/mijn-klantenrekening/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27319.jpg",
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
        entryUrl: "https://www.poweo.be/nl/mijn-klantenrekening/",
    }

    constructor() {
        super(PoweoFrCollector.CONFIG);
    }
}
