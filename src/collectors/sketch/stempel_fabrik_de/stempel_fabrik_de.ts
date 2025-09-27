
import { SketchCollector } from '../../sketchCollector';

export class StempelFabrikDeCollector extends SketchCollector {

    static CONFIG = {
        id: "stempel_fabrik_de",
        name: "stempel-fabrik.de",
        description: "i18n.collectors.stempel_fabrik_de.description",
        version: "0",
        website: "https://www.stempel-fabrik.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3552.jpg",
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
        entryUrl: "https://www.stempel-fabrik.de/account/orders",
    }

    constructor() {
        super(StempelFabrikDeCollector.CONFIG);
    }
}
