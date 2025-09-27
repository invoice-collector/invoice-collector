
import { SketchCollector } from '../../sketchCollector';

export class RealisaprintCollector extends SketchCollector {

    static CONFIG = {
        id: "realisaprint",
        name: "Realisaprint",
        description: "i18n.collectors.realisaprint.description",
        version: "0",
        website: "https://www.realisaprint.com/boutique/compte_commande.php#tabs-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170811.jpg",
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
        entryUrl: "https://www.realisaprint.com/boutique/compte_commande.php#tabs-commandes",
    }

    constructor() {
        super(RealisaprintCollector.CONFIG);
    }
}
