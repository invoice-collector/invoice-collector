
import { SketchCollector } from '../../sketchCollector';

export class AponeoCollector extends SketchCollector {

    static CONFIG = {
        id: "aponeo",
        name: "APONEO",
        description: "i18n.collectors.aponeo.description",
        version: "0",
        website: "https://www.aponeo.de/kundenbereich/bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178820.jpg",
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
        entryUrl: "https://www.aponeo.de/kundenbereich/bestellungen/",
    }

    constructor() {
        super(AponeoCollector.CONFIG);
    }
}
