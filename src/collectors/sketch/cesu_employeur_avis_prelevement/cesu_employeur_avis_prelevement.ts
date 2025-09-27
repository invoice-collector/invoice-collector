
import { SketchCollector } from '../../sketchCollector';

export class CesuEmployeurAvisPrelevementCollector extends SketchCollector {

    static CONFIG = {
        id: "cesu_employeur_avis_prelevement",
        name: "CESU Employeur - Avis Prelevement",
        description: "i18n.collectors.cesu_employeur_avis_prelevement.description",
        version: "0",
        website: "https://www.cesu.urssaf.fr/info/accueil/utiliser-le-cesu/calcul-et-paiement-des-cotisatio/quelles-sont-les-informations-pr.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105786.jpg",
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
        entryUrl: "https://www.cesu.urssaf.fr/info/accueil/utiliser-le-cesu/calcul-et-paiement-des-cotisatio/quelles-sont-les-informations-pr.html",
    }

    constructor() {
        super(CesuEmployeurAvisPrelevementCollector.CONFIG);
    }
}
