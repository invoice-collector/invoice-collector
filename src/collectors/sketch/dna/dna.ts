
import { SketchCollector } from '../../sketchCollector';

export class DnaCollector extends SketchCollector {

    static CONFIG = {
        id: "dna",
        name: "DNA",
        description: "i18n.collectors.dna.description",
        version: "0",
        website: "https://c.dna.fr/espace-client/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468251.jpg",
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
        entryUrl: "https://c.dna.fr/espace-client/mes-factures",
    }

    constructor() {
        super(DnaCollector.CONFIG);
    }
}
