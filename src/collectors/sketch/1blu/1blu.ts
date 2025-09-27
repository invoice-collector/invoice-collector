
import { SketchCollector } from '../../sketchCollector';

export class _1bluCollector extends SketchCollector {

    static CONFIG = {
        id: "1blu",
        name: "1blu",
        description: "i18n.collectors.1blu.description",
        version: "0",
        website: "https://login.1blu.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/667.jpg",
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
        entryUrl: "https://login.1blu.de/login.php",
    }

    constructor() {
        super(_1bluCollector.CONFIG);
    }
}
