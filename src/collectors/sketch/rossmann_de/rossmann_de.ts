
import { SketchCollector } from '../../sketchCollector';

export class RossmannDeCollector extends SketchCollector {

    static CONFIG = {
        id: "rossmann_de",
        name: "Rossmann.de",
        description: "i18n.collectors.rossmann_de.description",
        version: "0",
        website: "https://www.rossmann.de/de/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218071.jpg",
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
        entryUrl: "https://www.rossmann.de/de/my-account",
    }

    constructor() {
        super(RossmannDeCollector.CONFIG);
    }
}
