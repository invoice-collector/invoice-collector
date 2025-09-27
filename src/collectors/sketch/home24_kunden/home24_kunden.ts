
import { SketchCollector } from '../../sketchCollector';

export class Home24KundenCollector extends SketchCollector {

    static CONFIG = {
        id: "home24_kunden",
        name: "Home24 Kunden",
        description: "i18n.collectors.home24_kunden.description",
        version: "0",
        website: "https://www.home24.de/meinkundenkonto/kunde/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15360.jpg",
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
        entryUrl: "https://www.home24.de/meinkundenkonto/kunde/login",
    }

    constructor() {
        super(Home24KundenCollector.CONFIG);
    }
}
