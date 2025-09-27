
import { SketchCollector } from '../../sketchCollector';

export class LaPosteBoutiqueLettreRecommandeeSeulementCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_boutique_lettre_recommandee_seulement",
        name: "La Poste (Boutique Lettre recommandee seulement)",
        description: "i18n.collectors.la_poste_boutique_lettre_recommandee_seulement.description",
        version: "0",
        website: "https://www.laposte.fr/lettre-recommandee-en-ligne",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106894.jpg",
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
        entryUrl: "https://www.laposte.fr/lettre-recommandee-en-ligne",
    }

    constructor() {
        super(LaPosteBoutiqueLettreRecommandeeSeulementCollector.CONFIG);
    }
}
