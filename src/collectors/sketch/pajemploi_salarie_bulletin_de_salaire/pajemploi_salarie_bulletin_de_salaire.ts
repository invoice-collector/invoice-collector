
import { SketchCollector } from '../../sketchCollector';

export class PajemploiSalarieBulletinDeSalaireCollector extends SketchCollector {

    static CONFIG = {
        id: "pajemploi_salarie_bulletin_de_salaire",
        name: "Pajemploi Salarie - Bulletin de salaire",
        description: "i18n.collectors.pajemploi_salarie_bulletin_de_salaire.description",
        version: "0",
        website: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/assistante-maternelle-agreee/je-cesse-mon-activite/le-dernier-bulletin-de-salaire.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107892.jpg",
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
        entryUrl: "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/assistante-maternelle-agreee/je-cesse-mon-activite/le-dernier-bulletin-de-salaire.html",
    }

    constructor() {
        super(PajemploiSalarieBulletinDeSalaireCollector.CONFIG);
    }
}
