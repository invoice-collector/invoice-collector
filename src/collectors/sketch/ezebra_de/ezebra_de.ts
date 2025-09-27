
import { SketchCollector } from '../../sketchCollector';

export class EzebraDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ezebra_de",
        name: "eZebra.de",
        description: "i18n.collectors.ezebra_de.description",
        version: "0",
        website: "https://ezebra.de/de/signin.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197919.jpg",
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
        entryUrl: "https://ezebra.de/de/signin.html",
    }

    constructor() {
        super(EzebraDeCollector.CONFIG);
    }
}
