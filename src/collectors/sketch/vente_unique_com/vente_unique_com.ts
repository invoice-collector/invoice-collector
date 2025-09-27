
import { SketchCollector } from '../../sketchCollector';

export class VenteUniqueComCollector extends SketchCollector {

    static CONFIG = {
        id: "vente_unique_com",
        name: "Vente-unique.com",
        description: "i18n.collectors.vente_unique_com.description",
        version: "0",
        website: "https://www.vente-unique.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124844.jpg",
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
        entryUrl: "https://www.vente-unique.com/",
    }

    constructor() {
        super(VenteUniqueComCollector.CONFIG);
    }
}
