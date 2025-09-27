
import { SketchCollector } from '../../sketchCollector';

export class AutoflotteCollector extends SketchCollector {

    static CONFIG = {
        id: "autoflotte",
        name: "Autoflotte",
        description: "i18n.collectors.autoflotte.description",
        version: "0",
        website: "https://www.auto-business-shop.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020008.jpg",
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
        entryUrl: "https://www.auto-business-shop.de/login.html",
    }

    constructor() {
        super(AutoflotteCollector.CONFIG);
    }
}
