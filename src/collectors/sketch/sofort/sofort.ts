
import { SketchCollector } from '../../sketchCollector';

export class SofortCollector extends SketchCollector {

    static CONFIG = {
        id: "sofort",
        name: "SOFORT",
        description: "i18n.collectors.sofort.description",
        version: "0",
        website: "https://www.sofort.com/payment/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3331.jpg",
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
        entryUrl: "https://www.sofort.com/payment/invoices",
    }

    constructor() {
        super(SofortCollector.CONFIG);
    }
}
