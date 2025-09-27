
import { SketchCollector } from '../../sketchCollector';

export class EdenredFrCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred_fr",
        name: "Edenred.fr",
        description: "i18n.collectors.edenred_fr.description",
        version: "0",
        website: "https://www.espaceclient.edenred.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24118.jpg",
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
        entryUrl: "https://www.espaceclient.edenred.fr/",
    }

    constructor() {
        super(EdenredFrCollector.CONFIG);
    }
}
