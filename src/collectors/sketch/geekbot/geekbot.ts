
import { SketchCollector } from '../../sketchCollector';

export class GeekbotCollector extends SketchCollector {

    static CONFIG = {
        id: "geekbot",
        name: "Geekbot",
        description: "i18n.collectors.geekbot.description",
        version: "0",
        website: "https://geekbot.com/dashboard/billing#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122123.jpg",
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
        entryUrl: "https://geekbot.com/dashboard/billing#invoices",
    }

    constructor() {
        super(GeekbotCollector.CONFIG);
    }
}
