
import { SketchCollector } from '../../sketchCollector';

export class RapeedoCollector extends SketchCollector {

    static CONFIG = {
        id: "rapeedo",
        name: "rapeedo",
        description: "i18n.collectors.rapeedo.description",
        version: "0",
        website: "https://mein.kommitt.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9242.jpg",
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
        entryUrl: "https://mein.kommitt.de/login.php",
    }

    constructor() {
        super(RapeedoCollector.CONFIG);
    }
}
