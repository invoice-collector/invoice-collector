
import { SketchCollector } from '../../sketchCollector';

export class XeroxPartnerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "xerox_partner_portal",
        name: "Xerox Partner Portal",
        description: "i18n.collectors.xerox_partner_portal.description",
        version: "0",
        website: "https://partneraccounts.services.xerox.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1665470.jpg",
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
        entryUrl: "https://partneraccounts.services.xerox.com/",
    }

    constructor() {
        super(XeroxPartnerPortalCollector.CONFIG);
    }
}
