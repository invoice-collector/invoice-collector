
import { SketchCollector } from '../../sketchCollector';

export class BoutiqueDeMuseesCollector extends SketchCollector {

    static CONFIG = {
        id: "boutique_de_musees",
        name: "Boutique de Musees",
        description: "i18n.collectors.boutique_de_musees.description",
        version: "0",
        website: "https://www.boutiquesdemusees.fr/en/club/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115922.jpg",
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
        entryUrl: "https://www.boutiquesdemusees.fr/en/club/",
    }

    constructor() {
        super(BoutiqueDeMuseesCollector.CONFIG);
    }
}
