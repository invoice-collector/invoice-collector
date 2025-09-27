
import { SketchCollector } from '../../sketchCollector';

export class CavecEspaceEmployeurCollector extends SketchCollector {

    static CONFIG = {
        id: "cavec_espace_employeur",
        name: "Cavec - ESPACE EMPLOYEUR",
        description: "i18n.collectors.cavec_espace_employeur.description",
        version: "0",
        website: "https://employeur.macavecenligne.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105280.jpg",
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
        entryUrl: "https://employeur.macavecenligne.fr/",
    }

    constructor() {
        super(CavecEspaceEmployeurCollector.CONFIG);
    }
}
