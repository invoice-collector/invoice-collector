
import { SketchCollector } from '../../sketchCollector';

export class DeutscheTelekomCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_telekom",
        name: "Deutsche Telekom",
        description: "i18n.collectors.deutsche_telekom.description",
        version: "0",
        website: "https://www.telekom.de/kundencenter/rechnungsuebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/302.jpg",
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
        entryUrl: "https://www.telekom.de/kundencenter/rechnungsuebersicht",
    }

    constructor() {
        super(DeutscheTelekomCollector.CONFIG);
    }
}
