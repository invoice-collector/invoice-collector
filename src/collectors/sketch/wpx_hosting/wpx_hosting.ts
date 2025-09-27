
import { SketchCollector } from '../../sketchCollector';

export class WpxHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "wpx_hosting",
        name: "WPX Hosting",
        description: "i18n.collectors.wpx_hosting.description",
        version: "0",
        website: "https://de.wpxhosting.com/clientarea/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170810.jpg",
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
        entryUrl: "https://de.wpxhosting.com/clientarea/invoices/",
    }

    constructor() {
        super(WpxHostingCollector.CONFIG);
    }
}
