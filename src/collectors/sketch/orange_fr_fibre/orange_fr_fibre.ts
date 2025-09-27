
import { SketchCollector } from '../../sketchCollector';

export class OrangeFrFibreCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_fr_fibre",
        name: "Orange fr fibre",
        description: "i18n.collectors.orange_fr_fibre.description",
        version: "0",
        website: "https://espace-client.orange.fr/facture-paiement/9010420406/historique-des-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779712.jpg",
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
        entryUrl: "https://espace-client.orange.fr/facture-paiement/9010420406/historique-des-factures",
    }

    constructor() {
        super(OrangeFrFibreCollector.CONFIG);
    }
}
