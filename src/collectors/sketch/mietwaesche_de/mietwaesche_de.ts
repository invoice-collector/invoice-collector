
import { SketchCollector } from '../../sketchCollector';

export class MietwaescheDeCollector extends SketchCollector {

    static CONFIG = {
        id: "mietwaesche_de",
        name: "mietwaesche.de",
        description: "i18n.collectors.mietwaesche_de.description",
        version: "0",
        website: "https://auftrag.mietwaesche.de/kundenlogin/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26533.jpg",
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
        entryUrl: "https://auftrag.mietwaesche.de/kundenlogin/login.php",
    }

    constructor() {
        super(MietwaescheDeCollector.CONFIG);
    }
}
