
import { SketchCollector } from '../../sketchCollector';

export class KleinanzeigenCollector extends SketchCollector {

    static CONFIG = {
        id: "kleinanzeigen",
        name: "Kleinanzeigen",
        description: "i18n.collectors.kleinanzeigen.description",
        version: "0",
        website: "https://www.kleinanzeigen.de/m-rechnungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3340229.jpg",
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
        entryUrl: "https://www.kleinanzeigen.de/m-rechnungen.html",
    }

    constructor() {
        super(KleinanzeigenCollector.CONFIG);
    }
}
