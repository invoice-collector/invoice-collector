
import { SketchCollector } from '../../sketchCollector';

export class ReweKartenweltCollector extends SketchCollector {

    static CONFIG = {
        id: "rewe_kartenwelt",
        name: "Rewe Kartenwelt",
        description: "i18n.collectors.rewe_kartenwelt.description",
        version: "0",
        website: "https://kartenwelt.rewe.de/sales/order/invoice/order_id/762116/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727892.jpg",
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
        entryUrl: "https://kartenwelt.rewe.de/sales/order/invoice/order_id/762116/",
    }

    constructor() {
        super(ReweKartenweltCollector.CONFIG);
    }
}
