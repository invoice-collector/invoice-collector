
import { SketchCollector } from '../../sketchCollector';

export class AmadeusEbillingPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "amadeus_ebilling_portal",
        name: "Amadeus eBilling Portal",
        description: "i18n.collectors.amadeus_ebilling_portal.description",
        version: "0",
        website: "https://ebillingcentre.de.amadeus.com/sfiler/Tree.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777409.jpg",
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
        entryUrl: "https://ebillingcentre.de.amadeus.com/sfiler/Tree.action",
    }

    constructor() {
        super(AmadeusEbillingPortalCollector.CONFIG);
    }
}
