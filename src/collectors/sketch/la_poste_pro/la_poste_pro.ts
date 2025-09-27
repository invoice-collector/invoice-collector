
import { SketchCollector } from '../../sketchCollector';

export class LaPosteProCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_pro",
        name: "La Poste pro",
        description: "i18n.collectors.la_poste_pro.description",
        version: "0",
        website: "https://www.laposte.fr/professionnel/espaceclient/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73829.jpg",
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
        entryUrl: "https://www.laposte.fr/professionnel/espaceclient/factures",
    }

    constructor() {
        super(LaPosteProCollector.CONFIG);
    }
}
