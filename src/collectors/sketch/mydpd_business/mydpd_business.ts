
import { SketchCollector } from '../../sketchCollector';

export class MydpdBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "mydpd_business",
        name: "MyDPD Business",
        description: "i18n.collectors.mydpd_business.description",
        version: "0",
        website: "https://www.mydpdbusiness.de/auftraege/rechnungen.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45749.jpg",
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
        entryUrl: "https://www.mydpdbusiness.de/auftraege/rechnungen.aspx",
    }

    constructor() {
        super(MydpdBusinessCollector.CONFIG);
    }
}
