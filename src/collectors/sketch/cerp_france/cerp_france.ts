
import { SketchCollector } from '../../sketchCollector';

export class CerpFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "cerp_france",
        name: "CERP France",
        description: "i18n.collectors.cerp_france.description",
        version: "0",
        website: "https://www.cerpfrance.com/fr/accueil/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/565878.jpg",
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
        entryUrl: "https://www.cerpfrance.com/fr/accueil/",
    }

    constructor() {
        super(CerpFranceCollector.CONFIG);
    }
}
