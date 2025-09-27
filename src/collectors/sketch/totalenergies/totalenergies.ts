
import { SketchCollector } from '../../sketchCollector';

export class TotalenergiesCollector extends SketchCollector {

    static CONFIG = {
        id: "totalenergies",
        name: "TotalEnergies",
        description: "i18n.collectors.totalenergies.description",
        version: "0",
        website: "https://www.totalenergies.fr/clients/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955982.jpg",
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
        entryUrl: "https://www.totalenergies.fr/clients/connexion",
    }

    constructor() {
        super(TotalenergiesCollector.CONFIG);
    }
}
