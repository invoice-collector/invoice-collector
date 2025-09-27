
import { SketchCollector } from '../../sketchCollector';

export class RisoCooperationGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "riso_cooperation_gmbh",
        name: "Riso Cooperation GmbH",
        description: "i18n.collectors.riso_cooperation_gmbh.description",
        version: "0",
        website: "https://www.riso.de/shop/mein-konto/bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748580.jpg",
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
        entryUrl: "https://www.riso.de/shop/mein-konto/bestellungen/",
    }

    constructor() {
        super(RisoCooperationGmbhCollector.CONFIG);
    }
}
