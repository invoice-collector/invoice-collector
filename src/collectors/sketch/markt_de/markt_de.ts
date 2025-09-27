
import { SketchCollector } from '../../sketchCollector';

export class MarktDeCollector extends SketchCollector {

    static CONFIG = {
        id: "markt_de",
        name: "markt.de",
        description: "i18n.collectors.markt_de.description",
        version: "0",
        website: "https://www.markt.de/benutzer/shoprechnungen.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14899.jpg",
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
        entryUrl: "https://www.markt.de/benutzer/shoprechnungen.htm",
    }

    constructor() {
        super(MarktDeCollector.CONFIG);
    }
}
