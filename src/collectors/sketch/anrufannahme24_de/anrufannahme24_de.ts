
import { SketchCollector } from '../../sketchCollector';

export class Anrufannahme24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "anrufannahme24_de",
        name: "Anrufannahme24.de",
        description: "i18n.collectors.anrufannahme24_de.description",
        version: "0",
        website: "https://app.anrufannahme24.de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416076.jpg",
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
        entryUrl: "https://app.anrufannahme24.de/account/invoices",
    }

    constructor() {
        super(Anrufannahme24DeCollector.CONFIG);
    }
}
