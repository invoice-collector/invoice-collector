
import { SketchCollector } from '../../sketchCollector';

export class LekkerEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "lekker_energie",
        name: "lekker Energie",
        description: "i18n.collectors.lekker_energie.description",
        version: "0",
        website: "https://mein.lekker.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14817.jpg",
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
        entryUrl: "https://mein.lekker.de/",
    }

    constructor() {
        super(LekkerEnergieCollector.CONFIG);
    }
}
