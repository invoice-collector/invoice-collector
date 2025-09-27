
import { SketchCollector } from '../../sketchCollector';

export class TeltecDeCollector extends SketchCollector {

    static CONFIG = {
        id: "teltec_de",
        name: "teltec.de",
        description: "i18n.collectors.teltec_de.description",
        version: "0",
        website: "https://www.teltec.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21942.jpg",
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
        entryUrl: "https://www.teltec.de/mein-konto/",
    }

    constructor() {
        super(TeltecDeCollector.CONFIG);
    }
}
