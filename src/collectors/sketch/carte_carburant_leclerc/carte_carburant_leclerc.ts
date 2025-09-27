
import { SketchCollector } from '../../sketchCollector';

export class CarteCarburantLeclercCollector extends SketchCollector {

    static CONFIG = {
        id: "carte_carburant_leclerc",
        name: "Carte Carburant Leclerc",
        description: "i18n.collectors.carte_carburant_leclerc.description",
        version: "0",
        website: "https://espace.cartecarburant.leclerc/EnergeoSI/client/facture/lister.do?method=rechercher",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421237.jpg",
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
        entryUrl: "https://espace.cartecarburant.leclerc/EnergeoSI/client/facture/lister.do?method=rechercher",
    }

    constructor() {
        super(CarteCarburantLeclercCollector.CONFIG);
    }
}
