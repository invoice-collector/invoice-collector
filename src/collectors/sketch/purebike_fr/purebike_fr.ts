
import { SketchCollector } from '../../sketchCollector';

export class PurebikeFrCollector extends SketchCollector {

    static CONFIG = {
        id: "purebike_fr",
        name: "PureBike.fr",
        description: "i18n.collectors.purebike_fr.description",
        version: "0",
        website: "https://www.purebike.fr/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122799.jpg",
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
        entryUrl: "https://www.purebike.fr/connexion/",
    }

    constructor() {
        super(PurebikeFrCollector.CONFIG);
    }
}
