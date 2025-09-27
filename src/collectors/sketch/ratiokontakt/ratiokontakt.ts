
import { SketchCollector } from '../../sketchCollector';

export class RatiokontaktCollector extends SketchCollector {

    static CONFIG = {
        id: "ratiokontakt",
        name: "Ratiokontakt",
        description: "i18n.collectors.ratiokontakt.description",
        version: "0",
        website: "https://kundencenter.ratiokontakt.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38916.jpg",
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
        entryUrl: "https://kundencenter.ratiokontakt.de/",
    }

    constructor() {
        super(RatiokontaktCollector.CONFIG);
    }
}
