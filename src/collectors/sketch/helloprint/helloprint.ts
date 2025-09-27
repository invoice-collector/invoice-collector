
import { SketchCollector } from '../../sketchCollector';

export class HelloprintCollector extends SketchCollector {

    static CONFIG = {
        id: "helloprint",
        name: "HelloPrint",
        description: "i18n.collectors.helloprint.description",
        version: "0",
        website: "https://www.helloprint.fr/index.php?controller=order-slip",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777996.jpg",
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
        entryUrl: "https://www.helloprint.fr/index.php?controller=order-slip",
    }

    constructor() {
        super(HelloprintCollector.CONFIG);
    }
}
