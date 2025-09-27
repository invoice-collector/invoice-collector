
import { SketchCollector } from '../../sketchCollector';

export class NukiCollector extends SketchCollector {

    static CONFIG = {
        id: "nuki",
        name: "nuki",
        description: "i18n.collectors.nuki.description",
        version: "0",
        website: "https://shop.nuki.io/de/mein-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480719.jpg",
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
        entryUrl: "https://shop.nuki.io/de/mein-account/orders/",
    }

    constructor() {
        super(NukiCollector.CONFIG);
    }
}
