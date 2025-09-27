
import { SketchCollector } from '../../sketchCollector';

export class TelekomPrepaidAufladungCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_prepaid_aufladung",
        name: "Telekom Prepaid Aufladung",
        description: "i18n.collectors.telekom_prepaid_aufladung.description",
        version: "0",
        website: "https://www.telekomaufladen.de/de/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57467.jpg",
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
        entryUrl: "https://www.telekomaufladen.de/de/auth/login",
    }

    constructor() {
        super(TelekomPrepaidAufladungCollector.CONFIG);
    }
}
