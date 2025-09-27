
import { SketchCollector } from '../../sketchCollector';

export class FactureDocaposteCollector extends SketchCollector {

    static CONFIG = {
        id: "facture_docaposte",
        name: "Facture DOCAPOSTE",
        description: "i18n.collectors.facture_docaposte.description",
        version: "0",
        website: "https://publication.e-facture.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4465509.jpg",
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
        entryUrl: "https://publication.e-facture.net/",
    }

    constructor() {
        super(FactureDocaposteCollector.CONFIG);
    }
}
