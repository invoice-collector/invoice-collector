
import { SketchCollector } from '../../sketchCollector';

export class EdenredBeCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred_be",
        name: "Edenred.be",
        description: "i18n.collectors.edenred_be.description",
        version: "0",
        website: "https://www.myedenred.be/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4510091.jpg",
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
        entryUrl: "https://www.myedenred.be/",
    }

    constructor() {
        super(EdenredBeCollector.CONFIG);
    }
}
