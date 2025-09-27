
import { SketchCollector } from '../../sketchCollector';

export class PricelabsCollector extends SketchCollector {

    static CONFIG = {
        id: "pricelabs",
        name: "PriceLabs",
        description: "i18n.collectors.pricelabs.description",
        version: "0",
        website: "https://pricelabs.co/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70085.jpg",
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
        entryUrl: "https://pricelabs.co/billing/",
    }

    constructor() {
        super(PricelabsCollector.CONFIG);
    }
}
