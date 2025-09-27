
import { SketchCollector } from '../../sketchCollector';

export class PajemploiSalarieRecapitulatifMensuelCollector extends SketchCollector {

    static CONFIG = {
        id: "pajemploi_salarie_recapitulatif_mensuel",
        name: "Pajemploi Salarie - Recapitulatif mensuel",
        description: "i18n.collectors.pajemploi_salarie_recapitulatif_mensuel.description",
        version: "0",
        website: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/documents-specimen/assistante-maternelle-agreee.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107893.jpg",
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
        entryUrl: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/documents-specimen/assistante-maternelle-agreee.html",
    }

    constructor() {
        super(PajemploiSalarieRecapitulatifMensuelCollector.CONFIG);
    }
}
