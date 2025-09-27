
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGeneraliCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_generali",
        name: "Mutuelle Generali",
        description: "i18n.collectors.mutuelle_generali.description",
        version: "0",
        website: "https://www.generali.fr/espace-client/public/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129097.jpg",
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
        entryUrl: "https://www.generali.fr/espace-client/public/connexion/",
    }

    constructor() {
        super(MutuelleGeneraliCollector.CONFIG);
    }
}
