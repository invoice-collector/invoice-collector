
import { SketchCollector } from '../../sketchCollector';

export class TelekomServicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_service_portal",
        name: "Telekom Service Portal",
        description: "i18n.collectors.telekom_service_portal.description",
        version: "0",
        website: "https://bsp.geschaeftskunden.telekom.de/portal/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1287631.jpg",
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
        entryUrl: "https://bsp.geschaeftskunden.telekom.de/portal/login.xhtml",
    }

    constructor() {
        super(TelekomServicePortalCollector.CONFIG);
    }
}
