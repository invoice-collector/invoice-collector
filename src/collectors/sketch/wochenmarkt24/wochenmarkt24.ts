
import { SketchCollector } from '../../sketchCollector';

export class Wochenmarkt24Collector extends SketchCollector {

    static CONFIG = {
        id: "wochenmarkt24",
        name: "Wochenmarkt24",
        description: "i18n.collectors.wochenmarkt24.description",
        version: "0",
        website: "https://www.wochenmarkt24.de/shop/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/403665.jpg",
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
        entryUrl: "https://www.wochenmarkt24.de/shop/rechnungen",
    }

    constructor() {
        super(Wochenmarkt24Collector.CONFIG);
    }
}
