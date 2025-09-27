
import { SketchCollector } from '../../sketchCollector';

export class ExpediaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "expedia_de",
        name: "Expedia.de",
        description: "i18n.collectors.expedia_de.description",
        version: "0",
        website: "https://www.expedia.de/trips/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/442.jpg",
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
        entryUrl: "https://www.expedia.de/trips/",
    }

    constructor() {
        super(ExpediaDeCollector.CONFIG);
    }
}
