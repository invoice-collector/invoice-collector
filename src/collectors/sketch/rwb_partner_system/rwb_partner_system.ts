
import { SketchCollector } from '../../sketchCollector';

export class RwbPartnerSystemCollector extends SketchCollector {

    static CONFIG = {
        id: "rwb_partner_system",
        name: "RWB Partner System",
        description: "i18n.collectors.rwb_partner_system.description",
        version: "0",
        website: "https://partnerportal.rwb-partners.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66507.jpg",
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
        entryUrl: "https://partnerportal.rwb-partners.de/",
    }

    constructor() {
        super(RwbPartnerSystemCollector.CONFIG);
    }
}
