
import { SketchCollector } from '../../sketchCollector';

export class EleshopCollector extends SketchCollector {

    static CONFIG = {
        id: "eleshop",
        name: "Eleshop",
        description: "i18n.collectors.eleshop.description",
        version: "0",
        website: "https://eleshop.fr/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777995.jpg",
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
        entryUrl: "https://eleshop.fr/sales/order/history/",
    }

    constructor() {
        super(EleshopCollector.CONFIG);
    }
}
