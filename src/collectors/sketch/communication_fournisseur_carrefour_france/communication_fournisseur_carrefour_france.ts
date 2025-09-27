
import { SketchCollector } from '../../sketchCollector';

export class CommunicationFournisseurCarrefourFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "communication_fournisseur_carrefour_france",
        name: "Communication Fournisseur Carrefour France",
        description: "i18n.collectors.communication_fournisseur_carrefour_france.description",
        version: "0",
        website: "https://www.cfcf.carrefour.net/cfou/gestionFactDiff.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642150.jpg",
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
        entryUrl: "https://www.cfcf.carrefour.net/cfou/gestionFactDiff.aspx",
    }

    constructor() {
        super(CommunicationFournisseurCarrefourFranceCollector.CONFIG);
    }
}
