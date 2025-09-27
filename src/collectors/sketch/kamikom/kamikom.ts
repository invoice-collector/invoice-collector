
import { SketchCollector } from '../../sketchCollector';

export class KamikomCollector extends SketchCollector {

    static CONFIG = {
        id: "kamikom",
        name: "Kamikom",
        description: "i18n.collectors.kamikom.description",
        version: "0",
        website: "https://app.kamikom.de/login/verwaltung/abrechnung/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189595.jpg",
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
        entryUrl: "https://app.kamikom.de/login/verwaltung/abrechnung/index.php",
    }

    constructor() {
        super(KamikomCollector.CONFIG);
    }
}
