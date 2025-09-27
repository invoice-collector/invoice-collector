
import { SketchCollector } from '../../sketchCollector';

export class BlauDeCollector extends SketchCollector {

    static CONFIG = {
        id: "blau_de",
        name: "blau.de",
        description: "i18n.collectors.blau_de.description",
        version: "0",
        website: "https://www.blau.de/mein-blau/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1397.jpg",
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
        entryUrl: "https://www.blau.de/mein-blau/",
    }

    constructor() {
        super(BlauDeCollector.CONFIG);
    }
}
