
import { SketchCollector } from '../../sketchCollector';

export class LieferantenDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lieferanten_de",
        name: "Lieferanten.de",
        description: "i18n.collectors.lieferanten_de.description",
        version: "0",
        website: "https://www.lieferanten.de/#loginBox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/816538.jpg",
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
        entryUrl: "https://www.lieferanten.de/#loginBox",
    }

    constructor() {
        super(LieferantenDeCollector.CONFIG);
    }
}
