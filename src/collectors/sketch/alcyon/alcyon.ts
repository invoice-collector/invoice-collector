
import { SketchCollector } from '../../sketchCollector';

export class AlcyonCollector extends SketchCollector {

    static CONFIG = {
        id: "alcyon",
        name: "Alcyon",
        description: "i18n.collectors.alcyon.description",
        version: "0",
        website: "https://www.alcyon.com/accueil/piloter/comptabilite/factures/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356138.jpg",
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
        entryUrl: "https://www.alcyon.com/accueil/piloter/comptabilite/factures/mes-factures",
    }

    constructor() {
        super(AlcyonCollector.CONFIG);
    }
}
