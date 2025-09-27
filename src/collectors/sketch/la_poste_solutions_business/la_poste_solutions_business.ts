
import { SketchCollector } from '../../sketchCollector';

export class LaPosteSolutionsBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_solutions_business",
        name: "LA POSTE SOLUTIONS BUSINESS",
        description: "i18n.collectors.la_poste_solutions_business.description",
        version: "0",
        website: "https://www.laposte.fr/entreprise-collectivites",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/975350.jpg",
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
        entryUrl: "https://www.laposte.fr/entreprise-collectivites",
    }

    constructor() {
        super(LaPosteSolutionsBusinessCollector.CONFIG);
    }
}
