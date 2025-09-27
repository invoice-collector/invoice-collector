
import { SketchCollector } from '../../sketchCollector';

export class AmazonEsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_es",
        name: "Amazon (.es)",
        description: "i18n.collectors.amazon_es.description",
        version: "0",
        website: "https://www.amazon.es/gp/css/order-history/ref=nav_youraccount_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10251.jpg",
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
        entryUrl: "https://www.amazon.es/gp/css/order-history/ref=nav_youraccount_orders",
    }

    constructor() {
        super(AmazonEsCollector.CONFIG);
    }
}
