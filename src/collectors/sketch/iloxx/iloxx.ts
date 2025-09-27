
import { SketchCollector } from '../../sketchCollector';

export class IloxxCollector extends SketchCollector {

    static CONFIG = {
        id: "iloxx",
        name: "iloxx",
        description: "i18n.collectors.iloxx.description",
        version: "0",
        website: "https://www.iloxx.de/myiloxx/orders/invoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3138.jpg",
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
        entryUrl: "https://www.iloxx.de/myiloxx/orders/invoices.aspx",
    }

    constructor() {
        super(IloxxCollector.CONFIG);
    }
}
