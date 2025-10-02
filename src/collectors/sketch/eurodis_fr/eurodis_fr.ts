
import { SketchCollector } from '../../sketchCollector';

export class EurodisFrCollector extends SketchCollector {

    static CONFIG = {
        id: "eurodis_fr",
        name: "Eurodis (.fr)",
        description: "i18n.collectors.eurodis_fr.description",
        version: "0",
        website: "https://www.francofa-eurodis.fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/501527.jpg",
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
        entryUrl: "https://www.francofa-eurodis.fr/authentification?back=my-account",
    }

    constructor() {
        super(EurodisFrCollector.CONFIG);
    }
}
