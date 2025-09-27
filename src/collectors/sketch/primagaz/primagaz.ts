
import { SketchCollector } from '../../sketchCollector';

export class PrimagazCollector extends SketchCollector {

    static CONFIG = {
        id: "primagaz",
        name: "Primagaz",
        description: "i18n.collectors.primagaz.description",
        version: "0",
        website: "https://espace-client.primagaz.fr/factures/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103818.jpg",
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
        entryUrl: "https://espace-client.primagaz.fr/factures/mes-factures",
    }

    constructor() {
        super(PrimagazCollector.CONFIG);
    }
}
