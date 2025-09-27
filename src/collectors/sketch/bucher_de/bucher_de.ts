
import { SketchCollector } from '../../sketchCollector';

export class BucherDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bucher_de",
        name: "Bucher.de",
        description: "i18n.collectors.bucher_de.description",
        version: "0",
        website: "https://www.buecher.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27583.jpg",
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
        entryUrl: "https://www.buecher.de/",
    }

    constructor() {
        super(BucherDeCollector.CONFIG);
    }
}
