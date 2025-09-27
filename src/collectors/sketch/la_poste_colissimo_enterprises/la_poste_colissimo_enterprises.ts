
import { SketchCollector } from '../../sketchCollector';

export class LaPosteColissimoEnterprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_colissimo_enterprises",
        name: "La Poste (Colissimo Enterprises)",
        description: "i18n.collectors.la_poste_colissimo_enterprises.description",
        version: "0",
        website: "https://www.colissimo.entreprise.laposte.fr/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121137.jpg",
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
        entryUrl: "https://www.colissimo.entreprise.laposte.fr/fr",
    }

    constructor() {
        super(LaPosteColissimoEnterprisesCollector.CONFIG);
    }
}
