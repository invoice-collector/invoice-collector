
import { SketchCollector } from '../../sketchCollector';

export class TelindoCollector extends SketchCollector {

    static CONFIG = {
        id: "telindo",
        name: "telindo",
        description: "i18n.collectors.telindo.description",
        version: "0",
        website: "https://www.telindo.de/mein_konto/32/bestelluebersicht.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233040.jpg",
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
        entryUrl: "https://www.telindo.de/mein_konto/32/bestelluebersicht.htm",
    }

    constructor() {
        super(TelindoCollector.CONFIG);
    }
}
