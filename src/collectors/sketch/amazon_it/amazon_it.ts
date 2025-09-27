
import { SketchCollector } from '../../sketchCollector';

export class AmazonItCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_it",
        name: "Amazon (.it)",
        description: "i18n.collectors.amazon_it.description",
        version: "0",
        website: "https://www.amazon.it/gp/css/order-history/ref=nav_youraccount_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10252.jpg",
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
        entryUrl: "https://www.amazon.it/gp/css/order-history/ref=nav_youraccount_orders",
    }

    constructor() {
        super(AmazonItCollector.CONFIG);
    }
}
