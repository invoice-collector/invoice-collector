
import { SketchCollector } from '../../sketchCollector';

export class ParfimoCollector extends SketchCollector {

    static CONFIG = {
        id: "parfimo",
        name: "parfimo",
        description: "i18n.collectors.parfimo.description",
        version: "0",
        website: "https://www.parfimo.de/b2c/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097840.jpg",
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
        entryUrl: "https://www.parfimo.de/b2c/orders/",
    }

    constructor() {
        super(ParfimoCollector.CONFIG);
    }
}
