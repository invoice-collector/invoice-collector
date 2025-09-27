
import { SketchCollector } from '../../sketchCollector';

export class DeutscheTelekomBusinessServicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_telekom_business_service_portal",
        name: "Deutsche Telekom - Business Service Portal",
        description: "i18n.collectors.deutsche_telekom_business_service_portal.description",
        version: "0",
        website: "https://bsp.t-mobile.de/portal/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65818.jpg",
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
        entryUrl: "https://bsp.t-mobile.de/portal/login.xhtml",
    }

    constructor() {
        super(DeutscheTelekomBusinessServicePortalCollector.CONFIG);
    }
}
