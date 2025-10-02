
import { SketchCollector } from '../../sketchCollector';

export class KeysExpressFrCollector extends SketchCollector {

    static CONFIG = {
        id: "keys_express_fr",
        name: "Keys Express (.fr)",
        description: "i18n.collectors.keys_express_fr.description",
        version: "0",
        website: "https://keys.express/FR/sales/order/invoice/order_id/105568/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695464.jpg",
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
        entryUrl: "https://keys.express/FR/sales/order/invoice/order_id/105568/",
    }

    constructor() {
        super(KeysExpressFrCollector.CONFIG);
    }
}
