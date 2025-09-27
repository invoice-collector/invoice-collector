
import { SketchCollector } from '../../sketchCollector';

export class EsiooxCollector extends SketchCollector {

    static CONFIG = {
        id: "esioox",
        name: "Esioox",
        description: "i18n.collectors.esioox.description",
        version: "0",
        website: "https://www.placedescartes.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118874.jpg",
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
        entryUrl: "https://www.placedescartes.fr/connexion",
    }

    constructor() {
        super(EsiooxCollector.CONFIG);
    }
}
