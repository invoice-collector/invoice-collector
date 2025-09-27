
import { SketchCollector } from '../../sketchCollector';

export class OrderchampCollector extends SketchCollector {

    static CONFIG = {
        id: "orderchamp",
        name: "Orderchamp",
        description: "i18n.collectors.orderchamp.description",
        version: "0",
        website: "https://www.orderchamp.com/de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/925206.jpg",
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
        entryUrl: "https://www.orderchamp.com/de/account/invoices",
    }

    constructor() {
        super(OrderchampCollector.CONFIG);
    }
}
