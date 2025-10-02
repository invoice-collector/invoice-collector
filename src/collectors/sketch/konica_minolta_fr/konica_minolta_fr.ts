
import { SketchCollector } from '../../sketchCollector';

export class KonicaMinoltaFrCollector extends SketchCollector {

    static CONFIG = {
        id: "konica_minolta_fr",
        name: "Konica Minolta (.fr)",
        description: "i18n.collectors.konica_minolta_fr.description",
        version: "0",
        website: "https://ds-ecommerce.konicaminolta.fr/fr-fr/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2228056.jpg",
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
        entryUrl: "https://ds-ecommerce.konicaminolta.fr/fr-fr/invoices",
    }

    constructor() {
        super(KonicaMinoltaFrCollector.CONFIG);
    }
}
