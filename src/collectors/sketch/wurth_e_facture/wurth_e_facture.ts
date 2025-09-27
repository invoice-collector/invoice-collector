
import { SketchCollector } from '../../sketchCollector';

export class WurthEFactureCollector extends SketchCollector {

    static CONFIG = {
        id: "wurth_e_facture",
        name: "Wurth e-facture",
        description: "i18n.collectors.wurth_e_facture.description",
        version: "0",
        website: "https://wurth.e-facture.net/index.php?set_lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/629917.jpg",
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
        entryUrl: "https://wurth.e-facture.net/index.php?set_lang=en",
    }

    constructor() {
        super(WurthEFactureCollector.CONFIG);
    }
}
