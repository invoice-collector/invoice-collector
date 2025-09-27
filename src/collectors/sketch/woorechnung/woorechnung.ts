
import { SketchCollector } from '../../sketchCollector';

export class WoorechnungCollector extends SketchCollector {

    static CONFIG = {
        id: "woorechnung",
        name: "WooRechnung",
        description: "i18n.collectors.woorechnung.description",
        version: "0",
        website: "https://woorechnung.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10957.jpg",
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
        entryUrl: "https://woorechnung.com",
    }

    constructor() {
        super(WoorechnungCollector.CONFIG);
    }
}
