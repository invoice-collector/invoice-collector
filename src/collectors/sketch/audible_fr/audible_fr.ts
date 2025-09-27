
import { SketchCollector } from '../../sketchCollector';

export class AudibleFrCollector extends SketchCollector {

    static CONFIG = {
        id: "audible_fr",
        name: "Audible.fr",
        description: "i18n.collectors.audible_fr.description",
        version: "0",
        website: "https://www.audible.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116054.jpg",
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
        entryUrl: "https://www.audible.fr/",
    }

    constructor() {
        super(AudibleFrCollector.CONFIG);
    }
}
