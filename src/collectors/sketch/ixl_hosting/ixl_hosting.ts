
import { SketchCollector } from '../../sketchCollector';

export class IxlHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "ixl_hosting",
        name: "IXL Hosting",
        description: "i18n.collectors.ixl_hosting.description",
        version: "0",
        website: "https://www.ixlhosting.nl/login/aanmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32646.jpg",
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
        entryUrl: "https://www.ixlhosting.nl/login/aanmelden",
    }

    constructor() {
        super(IxlHostingCollector.CONFIG);
    }
}
