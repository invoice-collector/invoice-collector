
import { SketchCollector } from '../../sketchCollector';

export class EFactureSeresCollector extends SketchCollector {

    static CONFIG = {
        id: "e_facture_seres",
        name: "e-Facture(Seres)",
        description: "i18n.collectors.e_facture_seres.description",
        version: "0",
        website: "https://portail.e-facture.net/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125866.jpg",
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
        entryUrl: "https://portail.e-facture.net/index.php",
    }

    constructor() {
        super(EFactureSeresCollector.CONFIG);
    }
}
