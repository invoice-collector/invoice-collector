
import { SketchCollector } from '../../sketchCollector';

export class DigiprintSuppliesCollector extends SketchCollector {

    static CONFIG = {
        id: "digiprint_supplies",
        name: "Digiprint Supplies",
        description: "i18n.collectors.digiprint_supplies.description",
        version: "0",
        website: "https://www.digiprint-supplies.com/en/invoices/index/list/order_id/333694/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170844.jpg",
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
        entryUrl: "https://www.digiprint-supplies.com/en/invoices/index/list/order_id/333694/",
    }

    constructor() {
        super(DigiprintSuppliesCollector.CONFIG);
    }
}
