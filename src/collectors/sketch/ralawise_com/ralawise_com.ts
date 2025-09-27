
import { SketchCollector } from '../../sketchCollector';

export class RalawiseComCollector extends SketchCollector {

    static CONFIG = {
        id: "ralawise_com",
        name: "RALAWISE.com",
        description: "i18n.collectors.ralawise_com.description",
        version: "0",
        website: "https://shop.ralawise.com/my-account/order-history/order-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/945641.jpg",
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
        entryUrl: "https://shop.ralawise.com/my-account/order-history/order-history/",
    }

    constructor() {
        super(RalawiseComCollector.CONFIG);
    }
}
