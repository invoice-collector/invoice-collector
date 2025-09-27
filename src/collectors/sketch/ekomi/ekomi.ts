
import { SketchCollector } from '../../sketchCollector';

export class EkomiCollector extends SketchCollector {

    static CONFIG = {
        id: "ekomi",
        name: "eKomi",
        description: "i18n.collectors.ekomi.description",
        version: "0",
        website: "https://www.ekomi.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/548.jpg",
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
        entryUrl: "https://www.ekomi.de/login.php",
    }

    constructor() {
        super(EkomiCollector.CONFIG);
    }
}
