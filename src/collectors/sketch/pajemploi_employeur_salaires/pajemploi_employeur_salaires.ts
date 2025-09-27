
import { SketchCollector } from '../../sketchCollector';

export class PajemploiEmployeurSalairesCollector extends SketchCollector {

    static CONFIG = {
        id: "pajemploi_employeur_salaires",
        name: "Pajemploi Employeur - Salaires",
        description: "i18n.collectors.pajemploi_employeur_salaires.description",
        version: "0",
        website: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/employeur-dassistante-maternelle/je-remunere-et-je-declare/le-paiement-et-le-bulletin-de-sa.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107891.jpg",
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
        entryUrl: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/employeur-dassistante-maternelle/je-remunere-et-je-declare/le-paiement-et-le-bulletin-de-sa.html",
    }

    constructor() {
        super(PajemploiEmployeurSalairesCollector.CONFIG);
    }
}
