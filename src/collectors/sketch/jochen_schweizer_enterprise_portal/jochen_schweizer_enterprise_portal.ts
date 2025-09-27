
import { SketchCollector } from '../../sketchCollector';

export class JochenSchweizerEnterprisePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "jochen_schweizer_enterprise_portal",
        name: "Jochen Schweizer - Enterprise Portal",
        description: "i18n.collectors.jochen_schweizer_enterprise_portal.description",
        version: "0",
        website: "https://jep.jochen-schweizer.de/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29596.jpg",
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
        entryUrl: "https://jep.jochen-schweizer.de/auth",
    }

    constructor() {
        super(JochenSchweizerEnterprisePortalCollector.CONFIG);
    }
}
