
import { SketchCollector } from '../../sketchCollector';

export class GazDeBordeauxEspaceProCollector extends SketchCollector {

    static CONFIG = {
        id: "gaz_de_bordeaux_espace_pro",
        name: "Gaz de Bordeaux Espace Pro",
        description: "i18n.collectors.gaz_de_bordeaux_espace_pro.description",
        version: "0",
        website: "https://espacepro.gazdebordeaux.fr/factures-et-consommations",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4368514.jpg",
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
        entryUrl: "https://espacepro.gazdebordeaux.fr/factures-et-consommations",
    }

    constructor() {
        super(GazDeBordeauxEspaceProCollector.CONFIG);
    }
}
