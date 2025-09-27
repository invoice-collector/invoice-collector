
import { SketchCollector } from '../../sketchCollector';

export class _4overCollector extends SketchCollector {

    static CONFIG = {
        id: "4over",
        name: "4Over",
        description: "i18n.collectors.4over.description",
        version: "0",
        website: "https://4over.com/sales/order/history/#customer-content",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449757.jpg",
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
        entryUrl: "https://4over.com/sales/order/history/#customer-content",
    }

    constructor() {
        super(_4overCollector.CONFIG);
    }
}
