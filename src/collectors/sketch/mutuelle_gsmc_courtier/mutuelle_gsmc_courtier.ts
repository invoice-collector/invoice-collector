
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGsmcCourtierCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gsmc_courtier",
        name: "Mutuelle GSMC - courtier",
        description: "i18n.collectors.mutuelle_gsmc_courtier.description",
        version: "0",
        website: "https://www.mutuelle-gsmc.fr/courtier/public/authentification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128486.jpg",
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
        entryUrl: "https://www.mutuelle-gsmc.fr/courtier/public/authentification",
    }

    constructor() {
        super(MutuelleGsmcCourtierCollector.CONFIG);
    }
}
