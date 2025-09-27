
import { SketchCollector } from '../../sketchCollector';

export class AlternateCollector extends SketchCollector {

    static CONFIG = {
        id: "alternate",
        name: "Alternate",
        description: "i18n.collectors.alternate.description",
        version: "0",
        website: "https://www.alternate.de/MEIN-KONTO-(B2B)/Meine-Bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6462.jpg",
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
        entryUrl: "https://www.alternate.de/MEIN-KONTO-(B2B)/Meine-Bestellungen",
    }

    constructor() {
        super(AlternateCollector.CONFIG);
    }
}
