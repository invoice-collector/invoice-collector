
import { SketchCollector } from '../../sketchCollector';

export class OrderbirdCollector extends SketchCollector {

    static CONFIG = {
        id: "orderbird",
        name: "orderbird",
        description: "i18n.collectors.orderbird.description",
        version: "0",
        website: "https://my.orderbird.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30832.jpg",
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
        entryUrl: "https://my.orderbird.com/",
    }

    constructor() {
        super(OrderbirdCollector.CONFIG);
    }
}
