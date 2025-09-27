
import { SketchCollector } from '../../sketchCollector';

export class WirLebenApothekenCollector extends SketchCollector {

    static CONFIG = {
        id: "wir_leben_apotheken",
        name: "wir leben Apotheken",
        description: "i18n.collectors.wir_leben_apotheken.description",
        version: "0",
        website: "https://www.wirleben.de/myshop/orders/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730166.jpg",
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
        entryUrl: "https://www.wirleben.de/myshop/orders/overview",
    }

    constructor() {
        super(WirLebenApothekenCollector.CONFIG);
    }
}
