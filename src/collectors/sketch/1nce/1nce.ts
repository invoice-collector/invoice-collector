
import { SketchCollector } from '../../sketchCollector';

export class _1nceCollector extends SketchCollector {

    static CONFIG = {
        id: "1nce",
        name: "1nce",
        description: "i18n.collectors.1nce.description",
        version: "0",
        website: "https://portal.1nce.com/portal/customer/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1627039.jpg",
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
        entryUrl: "https://portal.1nce.com/portal/customer/orders",
    }

    constructor() {
        super(_1nceCollector.CONFIG);
    }
}
