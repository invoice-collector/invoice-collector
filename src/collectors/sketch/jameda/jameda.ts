
import { SketchCollector } from '../../sketchCollector';

export class JamedaCollector extends SketchCollector {

    static CONFIG = {
        id: "jameda",
        name: "jameda",
        description: "i18n.collectors.jameda.description",
        version: "0",
        website: "https://www.jameda.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15201.jpg",
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
        entryUrl: "https://www.jameda.de/login.php",
    }

    constructor() {
        super(JamedaCollector.CONFIG);
    }
}
