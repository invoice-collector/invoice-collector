
import { SketchCollector } from '../../sketchCollector';

export class DendreoCollector extends SketchCollector {

    static CONFIG = {
        id: "dendreo",
        name: "Dendreo",
        description: "i18n.collectors.dendreo.description",
        version: "0",
        website: "https://pro.dendreo.com/institut_reikiologie/abonnement/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396404.jpg",
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
        entryUrl: "https://pro.dendreo.com/institut_reikiologie/abonnement/factures",
    }

    constructor() {
        super(DendreoCollector.CONFIG);
    }
}
