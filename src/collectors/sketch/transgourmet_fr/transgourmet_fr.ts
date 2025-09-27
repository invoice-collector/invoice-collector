
import { SketchCollector } from '../../sketchCollector';

export class TransgourmetFrCollector extends SketchCollector {

    static CONFIG = {
        id: "transgourmet_fr",
        name: "Transgourmet.fr",
        description: "i18n.collectors.transgourmet_fr.description",
        version: "0",
        website: "http://www.transgourmet.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67772.jpg",
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
        entryUrl: "http://www.transgourmet.fr/",
    }

    constructor() {
        super(TransgourmetFrCollector.CONFIG);
    }
}
