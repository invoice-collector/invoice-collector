
import { SketchCollector } from '../../sketchCollector';

export class KramerItCollector extends SketchCollector {

    static CONFIG = {
        id: "kramer_it",
        name: "Kramer IT",
        description: "i18n.collectors.kramer_it.description",
        version: "0",
        website: "https://rechnung.kraemer-it.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71510.jpg",
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
        entryUrl: "https://rechnung.kraemer-it.de/",
    }

    constructor() {
        super(KramerItCollector.CONFIG);
    }
}
