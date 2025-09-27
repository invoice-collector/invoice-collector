
import { SketchCollector } from '../../sketchCollector';

export class PrixtelCollector extends SketchCollector {

    static CONFIG = {
        id: "prixtel",
        name: "Prixtel",
        description: "i18n.collectors.prixtel.description",
        version: "0",
        website: "https://espaceclient.prixtel.com/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27317.jpg",
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
        entryUrl: "https://espaceclient.prixtel.com/connexion",
    }

    constructor() {
        super(PrixtelCollector.CONFIG);
    }
}
