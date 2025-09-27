
import { SketchCollector } from '../../sketchCollector';

export class BenNlCollector extends SketchCollector {

    static CONFIG = {
        id: "ben_nl",
        name: "Ben.nl",
        description: "i18n.collectors.ben_nl.description",
        version: "0",
        website: "https://www.ben.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9022.jpg",
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
        entryUrl: "https://www.ben.nl/inloggen",
    }

    constructor() {
        super(BenNlCollector.CONFIG);
    }
}
