
import { SketchCollector } from '../../sketchCollector';

export class EspaceLinkCollector extends SketchCollector {

    static CONFIG = {
        id: "espace_link",
        name: "espace.link",
        description: "i18n.collectors.espace_link.description",
        version: "0",
        website: "https://icoworking.espace.link/gestion/factures/recurrentes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226586.jpg",
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
        entryUrl: "https://icoworking.espace.link/gestion/factures/recurrentes",
    }

    constructor() {
        super(EspaceLinkCollector.CONFIG);
    }
}
