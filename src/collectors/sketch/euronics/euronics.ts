
import { SketchCollector } from '../../sketchCollector';

export class EuronicsCollector extends SketchCollector {

    static CONFIG = {
        id: "euronics",
        name: "Euronics",
        description: "i18n.collectors.euronics.description",
        version: "0",
        website: "https://www.euronics.de/account#hide-registration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10158.jpg",
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
        entryUrl: "https://www.euronics.de/account#hide-registration",
    }

    constructor() {
        super(EuronicsCollector.CONFIG);
    }
}
