
import { SketchCollector } from '../../sketchCollector';

export class WebshareIoCollector extends SketchCollector {

    static CONFIG = {
        id: "webshare_io",
        name: "webshare.io",
        description: "i18n.collectors.webshare_io.description",
        version: "0",
        website: "https://proxy.webshare.io/subscription/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1384692.jpg",
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
        entryUrl: "https://proxy.webshare.io/subscription/invoices/",
    }

    constructor() {
        super(WebshareIoCollector.CONFIG);
    }
}
