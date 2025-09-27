
import { SketchCollector } from '../../sketchCollector';

export class CasafariCollector extends SketchCollector {

    static CONFIG = {
        id: "casafari",
        name: "Casafari",
        description: "i18n.collectors.casafari.description",
        version: "0",
        website: "https://de.casafari.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513815.jpg",
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
        entryUrl: "https://de.casafari.com/account/invoices",
    }

    constructor() {
        super(CasafariCollector.CONFIG);
    }
}
