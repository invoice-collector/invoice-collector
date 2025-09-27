
import { SketchCollector } from '../../sketchCollector';

export class DeutscheTelekomM2mPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_telekom_m2m_portal",
        name: "Deutsche Telekom M2M Portal",
        description: "i18n.collectors.deutsche_telekom_m2m_portal.description",
        version: "0",
        website: "https://portal-m2m.telekom.de/m2m-customer-portal/user/invoices/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396964.jpg",
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
        entryUrl: "https://portal-m2m.telekom.de/m2m-customer-portal/user/invoices/list",
    }

    constructor() {
        super(DeutscheTelekomM2mPortalCollector.CONFIG);
    }
}
