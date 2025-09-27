
import { SketchCollector } from '../../sketchCollector';

export class CintasCollector extends SketchCollector {

    static CONFIG = {
        id: "cintas",
        name: "Cintas",
        description: "i18n.collectors.cintas.description",
        version: "0",
        website: "https://www.cintas.com/_landing_pages/bill-pay/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1161130.jpg",
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
        entryUrl: "https://www.cintas.com/_landing_pages/bill-pay/",
    }

    constructor() {
        super(CintasCollector.CONFIG);
    }
}
