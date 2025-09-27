
import { SketchCollector } from '../../sketchCollector';

export class LaVapotiereCollector extends SketchCollector {

    static CONFIG = {
        id: "la_vapotiere",
        name: "La Vapotiere",
        description: "i18n.collectors.la_vapotiere.description",
        version: "0",
        website: "https://www.la-vapotiere.fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121382.jpg",
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
        entryUrl: "https://www.la-vapotiere.fr/connexion?back=my-account",
    }

    constructor() {
        super(LaVapotiereCollector.CONFIG);
    }
}
