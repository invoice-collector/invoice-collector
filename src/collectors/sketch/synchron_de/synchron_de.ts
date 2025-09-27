
import { SketchCollector } from '../../sketchCollector';

export class SynchronDeCollector extends SketchCollector {

    static CONFIG = {
        id: "synchron_de",
        name: "Synchron.de",
        description: "i18n.collectors.synchron_de.description",
        version: "0",
        website: "https://synchron.de/mein-konto.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11887.jpg",
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
        entryUrl: "https://synchron.de/mein-konto.html",
    }

    constructor() {
        super(SynchronDeCollector.CONFIG);
    }
}
