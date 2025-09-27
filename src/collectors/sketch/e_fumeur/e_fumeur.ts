
import { SketchCollector } from '../../sketchCollector';

export class EFumeurCollector extends SketchCollector {

    static CONFIG = {
        id: "e_fumeur",
        name: "E-fumeur",
        description: "i18n.collectors.e_fumeur.description",
        version: "0",
        website: "https://www.e-fumeur.fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118631.jpg",
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
        entryUrl: "https://www.e-fumeur.fr/connexion?back=my-account",
    }

    constructor() {
        super(EFumeurCollector.CONFIG);
    }
}
