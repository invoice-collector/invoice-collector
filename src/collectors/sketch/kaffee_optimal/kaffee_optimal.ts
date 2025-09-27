
import { SketchCollector } from '../../sketchCollector';

export class KaffeeOptimalCollector extends SketchCollector {

    static CONFIG = {
        id: "kaffee_optimal",
        name: "Kaffee-Optimal",
        description: "i18n.collectors.kaffee_optimal.description",
        version: "0",
        website: "https://www.kaffee-optimal.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534137.jpg",
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
        entryUrl: "https://www.kaffee-optimal.de/account/orders",
    }

    constructor() {
        super(KaffeeOptimalCollector.CONFIG);
    }
}
