
import { SketchCollector } from '../../sketchCollector';

export class NoreadeCollector extends SketchCollector {

    static CONFIG = {
        id: "noreade",
        name: "Noreade",
        description: "i18n.collectors.noreade.description",
        version: "0",
        website: "https://agenceenligne.noreade.fr/espace-personnel/historique-facturation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484548.jpg",
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
        entryUrl: "https://agenceenligne.noreade.fr/espace-personnel/historique-facturation",
    }

    constructor() {
        super(NoreadeCollector.CONFIG);
    }
}
