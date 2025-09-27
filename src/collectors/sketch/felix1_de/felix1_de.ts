
import { SketchCollector } from '../../sketchCollector';

export class Felix1DeCollector extends SketchCollector {

    static CONFIG = {
        id: "felix1_de",
        name: "felix1.de",
        description: "i18n.collectors.felix1_de.description",
        version: "0",
        website: "https://www.felix1.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22902.jpg",
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
        entryUrl: "https://www.felix1.de/",
    }

    constructor() {
        super(Felix1DeCollector.CONFIG);
    }
}
