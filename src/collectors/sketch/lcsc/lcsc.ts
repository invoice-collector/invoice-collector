
import { SketchCollector } from '../../sketchCollector';

export class LcscCollector extends SketchCollector {

    static CONFIG = {
        id: "lcsc",
        name: "LCSC",
        description: "i18n.collectors.lcsc.description",
        version: "0",
        website: "https://www.lcsc.com/order/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1603719.jpg",
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
        entryUrl: "https://www.lcsc.com/order/invoices",
    }

    constructor() {
        super(LcscCollector.CONFIG);
    }
}
