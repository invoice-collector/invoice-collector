
import { SketchCollector } from '../../sketchCollector';

export class SchichtplanerOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "schichtplaner_online",
        name: "Schichtplaner-Online",
        description: "i18n.collectors.schichtplaner_online.description",
        version: "0",
        website: "https://schichtplaner-online.de/pro/invoice_download/15477",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1264115.jpg",
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
        entryUrl: "https://schichtplaner-online.de/pro/invoice_download/15477",
    }

    constructor() {
        super(SchichtplanerOnlineCollector.CONFIG);
    }
}
